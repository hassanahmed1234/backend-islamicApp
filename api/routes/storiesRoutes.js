import express from 'express';
import { getStories } from '../controllers/storyController';

const router = express.Router();

router.get("/", getStories);

export default router;