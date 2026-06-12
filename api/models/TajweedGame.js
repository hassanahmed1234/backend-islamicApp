import mongoose from 'mongoose';

// 1. Tajweed Rule Schema
const TajweedRuleSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // e.g., 'qalqalah'
  name: { type: String, required: true },              // e.g., 'Qalqalah (Echoing)'
  color: { type: String, required: true },             // e.g., '#4ADE80'
  bgColor: { type: String, required: true }            // e.g., '#DCFCE7'
});

// 2. Word Pool Schema
const WordPoolSchema = new mongoose.Schema({
  text: { type: String, required: true },              // Arabic Word e.g., 'أَبْطَلَ'
  rule: { type: String, required: true },              // Matching Rule ID e.g., 'qalqalah'
  explanation: { type: String, required: true }        // Explanation text
});

// Models generate kar rahe hain
export const TajweedRule = mongoose.model('TajweedRule', TajweedRuleSchema);
export const WordPool = mongoose.model('WordPool', WordPoolSchema);