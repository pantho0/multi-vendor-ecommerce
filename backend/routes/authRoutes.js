const express = require('express');
const authControllers = require('../controllers/authControllers');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/api/admin-login', authControllers.auth);
router.post('/api/seller-register', authControllers.seller_register);
router.post('/api/seller-login', authControllers.seller_login);
router.get('/api/get-user', authMiddleware, authControllers.getUser);

module.exports = router;
