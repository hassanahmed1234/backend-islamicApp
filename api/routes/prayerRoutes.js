import express from 'express';
import { getPrayerTimes } from '../controllers/prayerController.js';

const router = express.Router();

router.get('/', getPrayerTimes);

export default router;