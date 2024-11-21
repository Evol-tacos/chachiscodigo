const express = require('express');
const { upload, handlePedidoEspecial } = require('../controllers/pedidoespecial.controller.js');

const router = express.Router();

router.post('/api/pedidosespecial', upload.single('imagen'), handlePedidoEspecial);

module.exports = router;