import express from 'express';
import { getQuiz } from '../controllers/quizController.js';

const router = express.Router();

router.get('/:level',getQuiz);

export default router;