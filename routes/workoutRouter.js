const express = require('express')
const router = express.Router()

const workoutController = require('../controllers/workoutController.js')

router.post('/', workoutController.CreateWorkout)
router.get('/', workoutController.GetWorkouts)
router.put('/:id', workoutController.UpdateWorkout)
router.delete('/:id', workoutController.DeleteWorkout)

module.exports = router