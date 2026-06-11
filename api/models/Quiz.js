
import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
    level: {
        type: Number,
        required: true,
        index: true // Index lagane se query bohot fast ho jayegi (2000+ rows pr zaroori hai)
    },
    question: {
        type: String,
        required: true
    },
    options: {
        type: [String], // Array of strings for choices
        required: true
    },
    correctAnswer: {
        type: String,
        required: true
    },
    explanation: {
        type: String // Agar aap details ya hawala dikhana chahein
    }
});

module.exports = mongoose.model('Question', QuestionSchema);