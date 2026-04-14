import { Router } from 'express';
import { getCourts, addCourt } from '../controllers/courtController';

const router = Router();
router.get('/', getCourts);
router.post('/', addCourt);

export default router;