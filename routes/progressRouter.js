const express = require('express')
const router = express.Router()

const progressController = require('../controllers/progressControllers.js')

router.post('/', progressControllers.CreateProgress)
router.get('/', progressControllers.GetProgress)
router.put('/:id', progressControllers.UpdateProgress)
router.delete('/:id', progressControllers.DeleteProgress)

module.exports = router