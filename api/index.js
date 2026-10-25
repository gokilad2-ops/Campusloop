import handler from '../netlify/functions/api.js';

export default async function (req, res) {
  let body;
  if (req.body !== undefined) {
    body = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
  } else if (req.method !== 'GET' && req.method !== 'HEAD') {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    body = Buffer.concat(chunks.map(chunk => typeof chunk === 'string' ? Buffer.from(chunk) : chunk)).toString('utf8');
  }

  const headers = new Headers();
  for (const [name, value] of Object.entries(req.headers)) {
    if (value !== undefined) headers.set(name, Array.isArray(value) ? value.join(', ') : String(value));
  }

  const init = { method: req.method, headers };
  if (req.method !== 'GET' && req.method !== 'HEAD') init.body = body ?? '';

  const request = new Request(new URL(req.url, `https://${req.headers.host || 'localhost'}`), init);
  const response = await handler(request);

  res.statusCode = response.status;
  response.headers.forEach((value, name) => res.setHeader(name, value));
  res.end(Buffer.from(await response.arrayBuffer()));
}
