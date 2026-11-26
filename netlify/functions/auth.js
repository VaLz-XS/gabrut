exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ ok: false, msg: 'Method not allowed' }) };
  }

  const { username, password } = JSON.parse(event.body);

  const ADMIN_USER = process.env.ADMIN_USER;
  const ADMIN_PASS = process.env.ADMIN_PASS;

  if (username === ADMIN_USER && password === ADMIN_PASS) {
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  }

  return { statusCode: 401, body: JSON.stringify({ ok: false, msg: 'Username atau password salah.' }) };
};
