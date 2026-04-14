import type { Request, Response } from 'express'; 
import * as CourtModel from '../models/courtModel.js';

export const getCourts = async (req: Request, res: Response) => {
  try {
    const data = await CourtModel.getAllCourts();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch courts' });
  }
};

export const addCourt = async (req: Request, res: Response) => {
  const { name, location } = req.body;
  try {
    await CourtModel.createCourt(name, location);
    res.status(201).json({ message: 'Court added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add court' });
  }
};