const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: {type: String, required: true },
  type: { type: String, required: true },
  duration: { type: Number, required: true }, 
  calories: { type: Number, required: true }, 
  date: { type: Date, default: Date.now }
})

const Workout = mongoose.model('Workout', workoutSchema)
module.exports = Workout
