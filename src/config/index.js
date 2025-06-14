// src/config/index.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.join(__dirname, '../../.env');

const envData = fs.readFileSync(envPath, 'utf-8');
const env = {};

for (const line of envData.split('\n')) {
  const [key, val] = line.trim().split('=');
  if (key) env[key] = val;
}

export const APP_PORT = env.APP_PORT || 3000;
export const DB_PATH = env.DB_PATH || './db/sqlite.db';
export const JWT_SECRET = env.JWT_SECRET || 'defaultsecret';
export const TOKEN_EXPIRY = env.TOKEN_EXPIRY || '1h';
