import express from 'express';
import { getCount, plusCount } from '../controllers/counterController.js';

const router = express.Router();

router.get('/', getCount);
router.post('/increment', plusCount);

export default router;