import express from 'express';
import {getAalim} from '../controllers/aalimController.js';

const router = express.Router();

router.get('/', getAalim);

export default router;