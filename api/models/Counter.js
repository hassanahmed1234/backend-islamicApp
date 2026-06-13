import mongoose from 'mongoose';

const counterSchema = new mongoose.Schema({
  totalCount: {
    type: Number,
    required: true,
    default: 0
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

export const Counter = mongoose.model('Counter', counterSchema);