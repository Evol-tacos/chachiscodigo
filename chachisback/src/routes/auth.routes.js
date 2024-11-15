const { Router } = require('express');
const { login, register, logout } = require('../controllers/auth.controller.js');

const router = Router();

router.post('/api/login', login);
router.post('/api/register', register);
router.post('/api/logout', logout);

module.exports = router;
