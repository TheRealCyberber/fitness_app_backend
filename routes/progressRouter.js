const express = require('express')
const router = express.Router()

const progressController = require('../controllers/progressController.js')

router.post('/', progressController.CreateProgress)
router.get('/', progressController.GetProgress)
router.put('/:id', progressController.UpdateProgress)
router.delete('/:id', progressController.DeleteProgress)

module.exports = router