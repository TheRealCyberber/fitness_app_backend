const express = require('express')
const router = express.Router()
const workoutController = require('../controllers/workoutController.js')
const middleware = require('../middleware')


router.get('/', 
    middleware.stripToken,
    middleware.verifyToken, 
    workoutController.GetWorkouts)
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
