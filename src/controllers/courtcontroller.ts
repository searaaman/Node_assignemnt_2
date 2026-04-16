import { Request, Response } from 'express';
import * as CourtModel from '../models/courtModel.js';

export const getAllCourts = async (req: Request, res: Response) => {
    try {
        const courts = await CourtModel.getCourts();
        res.status(200).json(courts);
    } catch (error) {
        console.error("Error in getAllCourts:", error);
        res.status(500).json({ error: "Failed to fetch courts" });
    }
};

export const addCourt = async (req: Request, res: Response) => {
    try {
        const { name, location } = req.body;
        
        
        if (!name || !location) {
            return res.status(400).json({ error: "Name and location are required" });
        }

        await CourtModel.createCourt(name, location);
        res.status(201).json({ message: "Court created successfully" });
    } catch (error) {
        console.error("Error in addCourt:", error);
        res.status(500).json({ error: "Failed to create court" });
    }
};

export const updateCourt = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, location } = req.body;

        if (!id || Number.isNaN(Number(id))) {
            return res.status(400).json({ error: "Valid ID is required" });
        }

        await CourtModel.modifyCourt(Number(id), name, location);
        res.status(200).json({ message: "Court updated" });
    } catch (error) {
        console.error("Error in updateCourt:", error);
        res.status(500).json({ error: "Failed to update court" });
    }
};

export const removeCourt = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (!id || Number.isNaN(Number(id))) {
            return res.status(400).json({ error: "Valid ID is required" });
        }

        await CourtModel.deleteCourt(Number(id));
        res.status(200).json({ message: "Court deleted" });
    } catch (error) {
        console.error("Error in removeCourt:", error);
        res.status(500).json({ error: "Failed to delete court" });
    }
};