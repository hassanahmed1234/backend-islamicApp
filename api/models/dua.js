import mongoose from "mongoose";

const duaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    arabic: {
      type: String,
      required: true
    },

    translation: {
      type: String,
      required: true
    },

    reference: {
      type: String, // e.g. Sahih Muslim 2723
      required: true
    },

    source: {
      type: String,
      enum: ["Quran", "Hadith"],
      required: true
    },

    category: {
      type: String,
      enum: [
        "morning",
        "evening",
        "travel",
        "protection",
        "sickness",
        "gratitude"
      ],
      required: true
    },

    repeat: {
      type: Number, // e.g. 3 times, 100 times
      default: 1
    },

    audioUrl: {
      type: String,
      default: ""
    },

    isFavorite: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);


export default mongoose.model("duaas", duaSchema);