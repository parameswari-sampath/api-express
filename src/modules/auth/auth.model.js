import db from '../../config/db.js';

export async function findByEmail(email) {
  const rows = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];
}

export async function createUser({ name, email, password_hash, role_id }) {
  const result = await db.query(
    'INSERT INTO users (name, email, password_hash, role_id) VALUES (?, ?, ?, ?)',
    [name, email, password_hash, role_id]
  );
  return { id: result.lastID, name, email, role_id };
}
