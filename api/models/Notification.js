import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    title: String,

    message: String,

    type: String,

    time: String,

    day: String,

    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Notification =
  mongoose.models.Notification ||
  mongoose.model("Notification", notificationSchema);

export default Notification;