const express = require('express');
const router = express.Router();
const { getInfoUsuario } = require('../controllers/userController');

router.get('/api/usuario', getInfoUsuario);

module.exports = router;