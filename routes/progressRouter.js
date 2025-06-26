const express = require('express')
const router = express.Router()
const progressController = require('../controllers/ProgressController.js')
const middleware = require('../middleware')


router.get('/', progressController.GetProgress)
router.post('/', 
    middleware.stripToken,
    middleware.verifyToken, 
    progressController.CreateProgress)
router.put('/:id', 
    middleware.stripToken,
    middleware.verifyToken,
    progressController.UpdateProgress)
router.delete('/:id', 
    middleware.stripToken,
    middleware.verifyToken,
    progressController.DeleteProgress)

module.exports = router