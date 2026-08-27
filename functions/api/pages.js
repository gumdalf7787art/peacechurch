export async function onRequestGet(context) {
  const { env } = context;
  try {
    const { results } = await env.DB.prepare("SELECT * FROM pages ORDER BY created_at DESC").all();
    return new Response(JSON.stringify({ success: true, pages: results }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}

export async function onRequestPost(context) {
  const { request, env } = context;
  try {
    const data = await request.json();
    const { slug, title, content } = data;

    if (!slug || !title) {
      return new Response(JSON.stringify({ success: false, message: 'Slug and title are required' }), { status: 400 });
    }

    const result = await env.DB.prepare(
      "INSERT INTO pages (slug, title, content) VALUES (?, ?, ?)"
    ).bind(slug, title, content || '').run();

    return new Response(JSON.stringify({ success: true, message: 'Page created successfully', id: result.meta.last_row_id }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    // Check for unique constraint failure
    if (error.message.includes('UNIQUE constraint failed')) {
      return new Response(JSON.stringify({ success: false, message: 'A page with this slug already exists.' }), { status: 409 });
    }
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
