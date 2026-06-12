import express from 'express';
import { getGameData } from '../controllers/tajweedController.js';

const router = express.Router();

// Game data fetch karne ka endpoint
router.get('/', getGameData);


export default router;