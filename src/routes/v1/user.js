const express = require('express')
const router = express.Router()

const userController = require('../../controllers/userController')

router.route('/:id').get(userController.getData)

module.exports = router
