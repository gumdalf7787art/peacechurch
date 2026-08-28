export async function onRequestGet(context) {
  const { request, env } = context;
  try {
    const url = new URL(request.url);
    const type = url.searchParams.get('type') || 'gallery';
    
    const { results } = await env.DB.prepare(
      `SELECT * FROM posts WHERE type = ? ORDER BY created_at DESC`
    ).bind(type).all();
    
    // Parse image_urls JSON
    const posts = results.map(post => ({
      ...post,
      image_urls: post.image_urls ? JSON.parse(post.image_urls) : []
    }));
    
    return new Response(JSON.stringify(posts), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(err.message, { status: 500 });
  }
}

export async function onRequestPost(context) {
  const { request, env } = context;
  try {
    const data = await request.json();
    const { type, title, content, author, image_urls } = data;
    
    await env.DB.prepare(
      `INSERT INTO posts (type, title, content, author, image_urls) VALUES (?, ?, ?, ?, ?)`
    ).bind(
      type || 'gallery', 
      title || '무제', 
      content || '', 
      author || '관리자', 
      JSON.stringify(image_urls || [])
    ).run();
    
    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(err.message, { status: 500 });
  }
}
