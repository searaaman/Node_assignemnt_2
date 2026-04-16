import pool from '../config/db.js';

export const getCourts = async () => {
    const [rows] = await pool.query('SELECT * FROM courts');
    return rows;
};

export const createCourt = async (name: string, location: string) => {
    return await pool.query('INSERT INTO courts (name, location) VALUES (?, ?)', [name, location]);
};

export const modifyCourt = async (id: number, name: string, location: string) => {
    return await pool.query('UPDATE courts SET name = ?, location = ? WHERE id = ?', [name, location, id]);
};

export const deleteCourt = async (id: number) => {
    return await pool.query('DELETE FROM courts WHERE id = ?', [id]);
};