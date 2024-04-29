const express = require('express');
const authControllers = require('../controllers/authControllers');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router()


router.post('/api/admin-login', authControllers)
// router.get('/api/get-user', authMiddleware, authControllers.getUser)
 
module.exports = router