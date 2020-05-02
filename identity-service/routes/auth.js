const express = require('express')
const controller = require('../controller/auth')

router = express.Router()

router.post('/register', [], controller.register)
router.post('/login', [], controller.login)
router.get('/logout', [], controller.logout)

module.exports = router