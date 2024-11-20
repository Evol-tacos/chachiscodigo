const express = require('express');
const router = express.Router();
const { getInfoCategorias, getInfoRellenos, getInfoSabores, getInfoTamanos, getInfoProductos, getInfoPedidos, getInfoUsuarios, onDelete } = require('../controllers/tablesController');

router.get('/api/categorias', getInfoCategorias); // Ruta para obtener las categorías

router.get('/api/tamanos', getInfoTamanos); // Ruta para obtener los tamaños

router.get('/api/sabores', getInfoSabores); // Ruta para obtener los sabores

router.get('/api/rellenos', getInfoRellenos); // Ruta para obtener los rellenos

router.get('/api/producto', getInfoProductos); // Ruta para obtener los pedidos

router.get('/api/pedido', getInfoPedidos); // Ruta para obtener los pedidos

router.get('/api/usuarios', getInfoUsuarios); // Ruta para obtener los pedidos

router.delete('/api/:tabla/:id', onDelete); // Ruta para borrar un elemento

module.exports = router;