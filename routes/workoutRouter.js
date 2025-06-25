const express = require('express')
const router = express.Router()

const workoutController = require('../controllers/workoutControllers.js')

router.post('/', workoutControllers.CreateWorkout)
router.get('/', workoutControllers.GetWorkouts)
router.put('/:id', workoutControllers.UpdateWorkout)
router.delete('/:id', workoutControllers.DeleteWorkout)

module.exports = router