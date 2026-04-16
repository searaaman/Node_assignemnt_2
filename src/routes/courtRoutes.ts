import { Router } from 'express';
import { getAllCourts, addCourt, updateCourt, removeCourt } from '../controllers/courtController.js';

const router = Router();

router.get('/', getAllCourts);
router.post('/', addCourt);
router.put('/:id', updateCourt);
router.delete('/:id', removeCourt);

export default router;