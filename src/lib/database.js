import { createPool } from 'mysql2/promise';

// Create a MySQL connection pool
const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'modern-mannerism',
  connectionLimit: 10, 
});

export default pool;
