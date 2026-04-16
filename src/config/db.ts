import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '12345678', 
  database: 'court_booking',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection()
  try {
  const connection = await pool.getConnection();
  console.log("✅ Database Connected");
  connection.release();
} catch (err) {
  console.error("❌ Connection Failed:", err);
}

export default pool;