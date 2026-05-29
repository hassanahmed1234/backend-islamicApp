import express from 'express';
import aalimController from '../controllers/aalimController.js';

const router = express.Router();

router.get('/', aalimController);

export default router;