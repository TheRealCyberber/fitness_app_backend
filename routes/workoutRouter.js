const express = require('express')
const router = express.Router()
const workoutController = require('../controllers/WorkoutController.js')
const middleware = require('../middleware')


router.get('/', workoutController.GetWorkouts)
router.post('/', 
    middleware.stripToken,
    middleware.verifyToken,
    workoutController.CreateWorkout)
router.put('/:id', 
    middleware.stripToken,
    middleware.verifyToken,
    workoutController.UpdateWorkout)
router.delete('/:id', 
    middleware.stripToken,
    middleware.verifyToken,
    workoutController.DeleteWorkout)

module.exports = router