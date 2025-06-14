import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { DB_PATH } from './index.js';
import fs from 'fs';

let db;

async function initDB() {
  const exists = fs.existsSync(DB_PATH);
  db = await open({
    filename: DB_PATH,
    driver: sqlite3.Database
  });

  if (!exists) {
    const schema = fs.readFileSync('./db/migrations.sql', 'utf-8');
    await db.exec(schema);
  }
}

await initDB();

export default {
  query: (sql, params = []) => db.all(sql, params)
};
