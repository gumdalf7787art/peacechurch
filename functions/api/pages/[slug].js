export async function onRequestGet(context) {
  const { env, params } = context;
  const slug = params.slug;

  try {
    const page = await env.DB.prepare("SELECT * FROM pages WHERE slug = ?").bind(slug).first();
    if (!page) {
      return new Response(JSON.stringify({ success: false, message: 'Page not found' }), { status: 404 });
    }
    return new Response(JSON.stringify({ success: true, page }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}

export async function onRequestPut(context) {
  const { request, env, params } = context;
  const slug = params.slug;

  try {
    const data = await request.json();
    const { title, content } = data;

    if (!title) {
      return new Response(JSON.stringify({ success: false, message: 'Title is required' }), { status: 400 });
    }

    const result = await env.DB.prepare(
      "UPDATE pages SET title = ?, content = ?, updated_at = CURRENT_TIMESTAMP WHERE slug = ?"
    ).bind(title, content || '', slug).run();

    if (result.meta.changes === 0) {
      return new Response(JSON.stringify({ success: false, message: 'Page not found' }), { status: 404 });
    }

    return new Response(JSON.stringify({ success: true, message: 'Page updated successfully' }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}

export async function onRequestDelete(context) {
  const { env, params } = context;
  const slug = params.slug;

  try {
    const result = await env.DB.prepare("DELETE FROM pages WHERE slug = ?").bind(slug).run();
    if (result.meta.changes === 0) {
      return new Response(JSON.stringify({ success: false, message: 'Page not found' }), { status: 404 });
    }
    return new Response(JSON.stringify({ success: true, message: 'Page deleted successfully' }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
