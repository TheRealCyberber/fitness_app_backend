const { Workout } = require('../models')

const GetWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({})
    res.send(workouts)
  } catch (error) {
    throw error
  }
}

const CreateWorkout = async (req, res) => {
  try {
    const workout = await Workout.create({ ...req.body })
    res.send(workout)
  } catch (error) {
    throw error
  }
}

const UpdateWorkout = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndUpdate(req.params.workout_id, req.body, {new: true})
    res.send(workout)
  } catch (error) {
    throw error
  }
}

const DeleteWorkout = async (req, res) => {
  try {
    await Workout.deleteOne({ _id: req.params.post_id })
    res.send({ msg: 'Workout Deleted', payload: req.params.workout_id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetWorkouts,
  CreateWorkout,
  UpdateWorkout,
  DeleteWorkout
}