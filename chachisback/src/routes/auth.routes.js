const { Router } = require('express');
const { login, register, logout, profile } = require('../controllers/auth.controller.js');
const { authrequire } = require('../middlewares/validatetoken.js');

const router = Router();

router.post('/api/login', login);
router.post('/api/register', register);
router.post('/api/logout', logout);
router.get('/api/profile', authrequire, profile);

module.exports = router;
