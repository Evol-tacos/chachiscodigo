const express = require('express');
const router = express.Router();
const { getInfoUsuario } = require('../controllers/userController');

router.get('/api/usuario', getInfoUsuario); // Ruta para obtener la información de un usuario

module.exports = router;