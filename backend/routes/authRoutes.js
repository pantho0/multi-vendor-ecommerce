const express = require('express');
const authControllers = require('../controllers/authControllers')
const router = express.Router()


router.post('/api/admin-login', authControllers)

module.exports = router