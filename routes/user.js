const express = require('express')
var cors = require('cors')
const router = express.Router()
const userController = require('../controller/userController')

router.post('/addUser',userController.addUser)
router.get('/getAllUser',userController.getUser)
router.post('/checkEmail',userController.checkEmail)
router.patch('/updateUser',userController.updateUser)

module.exports = router
