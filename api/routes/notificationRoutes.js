import express from "express";
import {
  getNotifications,
  addNotification,
} from "../controllers/notificationController.js";

const router = express.Router();

router.get("/", getNotifications);

export default router;