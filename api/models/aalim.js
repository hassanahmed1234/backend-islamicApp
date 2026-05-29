const mongoose = require('mongoose');

const ScholarSchema = new mongoose.Schema({
    name: { type: String, required: true },
    expertise: { type: String, required: true },
    qualification: { type: String, required: true },
    whatsapp: { type: String, required: true },
    availableTime: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('Scholar', ScholarSchema);