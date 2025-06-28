const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  weight: { type: Number, required: true }, 
  latestChange: { type: Number, required: true }, 
  notes: { type: String }
});

const Progress = mongoose.model('Progress', progressSchema)
module.exports = Progress
