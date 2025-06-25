const express = require('express')
const router = express.Router()

const workoutController = require('../controllers/workoutController.js')

router.post('/', workoutController.createWorkout)

module.exports = router