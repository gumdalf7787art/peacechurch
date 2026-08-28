async function ensureTable(env) {
  await env.DB.prepare(`
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      type TEXT NOT NULL,
      title TEXT NOT NULL,
      content TEXT,
      author TEXT,
      image_urls TEXT,
      views INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `).run();
}

export async function onRequestGet(context) {
  const { request, env } = context;
  try {
    const url = new URL(request.url);
    const type = url.searchParams.get('type') || 'gallery';
    
    let results;
    try {
      const dbRes = await env.DB.prepare(
        `SELECT * FROM posts WHERE type = ? ORDER BY created_at DESC`
      ).bind(type).all();
      results = dbRes.results;
    } catch (e) {
      if (e.message.includes('no such table')) {
        await ensureTable(env);
        results = [];
      } else {
        throw e;
      }
    }
    
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
    
    try {
      await env.DB.prepare(
        `INSERT INTO posts (type, title, content, author, image_urls) VALUES (?, ?, ?, ?, ?)`
      ).bind(
        type || 'gallery', 
        title || '무제', 
        content || '', 
        author || '관리자', 
        JSON.stringify(image_urls || [])
      ).run();
    } catch (e) {
      if (e.message.includes('no such table')) {
        await ensureTable(env);
        await env.DB.prepare(
          `INSERT INTO posts (type, title, content, author, image_urls) VALUES (?, ?, ?, ?, ?)`
        ).bind(
          type || 'gallery', 
          title || '무제', 
          content || '', 
          author || '관리자', 
          JSON.stringify(image_urls || [])
        ).run();
      } else {
        throw e;
      }
    }
    
    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(err.message, { status: 500 });
  }
}
