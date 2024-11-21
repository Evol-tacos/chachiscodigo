const express = require('express');
const router = express.Router();
const { getInfoCategorias, getInfoRellenos, 
        getInfoSabores, getInfoTamanos, 
        getInfoProductos, getInfoPedidos, 
        getInfoUsuarios, onDelete, 
        insertarDatos, actualizarElemento, getInfoDetallePedido, getInfoPedidosID } = require('../controllers/tablesController');

router.get('/api/categorias', getInfoCategorias); // Ruta para obtener las categorías

router.get('/api/tamanos', getInfoTamanos); // Ruta para obtener los tamaños

router.get('/api/sabores', getInfoSabores); // Ruta para obtener los sabores

router.get('/api/rellenos', getInfoRellenos); // Ruta para obtener los rellenos

router.get('/api/productos', getInfoProductos); // Ruta para obtener los pedidos

router.get('/api/pedidos', getInfoPedidos); // Ruta para obtener los pedidos

router.get('/api/usuarios', getInfoUsuarios); // Ruta para obtener los pedidos

router.delete('/api/:tabla/:id', onDelete); // Ruta para borrar un elemento

router.post('/api/agregar', insertarDatos); // Ruta para agregar un elemento

router.put('/api/actualizar', actualizarElemento); // Ruta para editar un elemento

router.get('/api/detalles/:id', getInfoDetallePedido); // Ruta para obtener los detalles de un pedido

router.get('/api/pedidos/:id', getInfoPedidosID); // Ruta para obtener los detalles de un pedido

module.exports = router;