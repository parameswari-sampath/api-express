import jwt from 'jsonwebtoken';
import { JWT_SECRET, TOKEN_EXPIRY } from '../config/index.js';

export function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: TOKEN_EXPIRY });
}

export function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}
