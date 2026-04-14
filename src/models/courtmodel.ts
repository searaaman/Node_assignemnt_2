import pool from '../config/db';

export const getAllCourts = async () => {
  const [rows] = await pool.query('SELECT * FROM courts');
  return rows;
};

export const createCourt = async (name: string, location: string) => {
  const [result] = await pool.query('INSERT INTO courts (name, location) VALUES (?, ?)', [name, location]);
  return result;
};