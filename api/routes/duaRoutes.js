import express from 'express';
import { getDua } from '../controllers/duaController.js';

const router = express.Router();

router.get('/', getDua);

export default router;