export async function onRequestGet(context) {
  const { env } = context;
  try {
    const { results } = await env.DB.prepare("SELECT * FROM subpages ORDER BY created_at DESC").all();
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
    const { slug, menu_id, title, subtitle, banner_image, content, is_published } = data;

    if (!slug || !title) {
      return new Response(JSON.stringify({ success: false, message: 'Slug and title are required' }), { status: 400 });
    }

    const result = await env.DB.prepare(
      "INSERT INTO subpages (slug, menu_id, title, subtitle, banner_image, content, is_published) VALUES (?, ?, ?, ?, ?, ?, ?)"
    ).bind(
      slug, 
      menu_id || null, 
      title, 
      subtitle || '', 
      banner_image || '', 
      content || '', 
      is_published === undefined ? 1 : is_published
    ).run();

    return new Response(JSON.stringify({ success: true, message: 'Page created successfully', id: result.meta.last_row_id }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    if (error.message.includes('UNIQUE constraint failed')) {
      return new Response(JSON.stringify({ success: false, message: 'A page with this slug already exists.' }), { status: 409 });
    }
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
