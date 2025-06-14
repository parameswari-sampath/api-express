import { hashPassword, verifyPassword } from '../../utils/hash.js';
import { signToken } from '../../core/auth.js';
import { findByEmail, createUser } from './auth.model.js';

export async function register({ name, email, password }) {
  const existing = await findByEmail(email);
  if (existing) throw new Error('User already exists');

  const password_hash = hashPassword(password);
  const user = await createUser({ name, email, password_hash, role_id: 2 });

  const token = signToken({ id: user.id, role_id: user.role_id });
  return { user, token };
}

export async function login({ email, password }) {
  const user = await findByEmail(email);
  if (!user) throw new Error('Invalid credentials');

  const valid = verifyPassword(password, user.password_hash);
  if (!valid) throw new Error('Invalid credentials');

  const token = signToken({ id: user.id, role_id: user.role_id });
  return { user, token };
}
