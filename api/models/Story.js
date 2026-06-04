// models/storyModel.js

import mongoose from "mongoose";

const storySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    subtitle: {
      type: String,
      default: "",
    },

    duration: {
      type: String,
      default: "",
    },

    lessons: {
      type: String,
      default: "",
    },

    color: {
      type: String,
      default: "#22D3EE",
    },

    points: {
      type: Number,
      default: 0,
    },

    youtubeVideoId: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Story", storySchema);