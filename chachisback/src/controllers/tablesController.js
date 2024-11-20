
const { borrarElemento, obtener_categoria, obtener_tamano, obtener_sabor, obtener_relleno, obtener_producto, obtener_pedido, obtener_usuarios } = require('../models/tablas.model');

// Controladores para cada tabla
const getInfoCategorias = async (req, res) => {
    try {
        const results = await obtener_categoria();

        if (results.length === 0) {
            return res.status(404).json({ error: 'No se encontraron categorías' });
        }

        const categorias = results.map(categoria => ({
            id_categoria: categoria.id_categoria,
            nombre_categoria: categoria.nombre_categoria,
            descripcion: categoria.descripcion
        }));

        res.json(categorias);

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error al obtener las categorías' });
    }
};

const getInfoTamanos = async (req, res) => {
    try {
        const results = await obtener_tamano();

        if (results.length === 0) {
            return res.status(404).json({ error: 'No se encontraron tamaños' });
        }

        const tamanos = results.map(tamano => ({
            id: tamano.id_tamano,
            nombre: tamano.nombre_tamano,
            descripcion: tamano.descripcion
        }));

        res.json(tamanos);

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error al obtener los tamaños' });
    }
};

const getInfoSabores = async (req, res) => {
    try {
        const results = await obtener_sabor();

        if (results.length === 0) {
            return res.status(404).json({ error: 'No se encontraron sabores' });
        }

        const sabores = results.map(sabor => ({
            id: sabor.id_sabor,
            nombre: sabor.nombre_sabor,
            descripcion: sabor.descripcion
        }));

        res.json(sabores);

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error al obtener los sabores' });
    }
};

const getInfoRellenos = async (req, res) => {
    try {
        const results = await obtener_relleno();

        if (results.length === 0) {
            return res.status(404).json({ error: 'No se encontraron rellenos' });
        }

        const rellenos = results.map(relleno => ({
            id: relleno.id_relleno,
            nombre: relleno.nombre_relleno,
            descripcion: relleno.descripcion
        }));

        res.json(rellenos);

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error al obtener los rellenos' });
    }
};

const getInfoProductos = async (req, res) => {
    try {
        const results = await obtener_producto();

        if (results.length === 0) {
            return res.status(404).json({ error: 'No se encontraron los productos' });
        }

        const productos = results.map(producto => ({
            id: producto.id_producto,
            imagen : producto.imagen,
            nombre: producto.nombre_producto,
            id_categoria: producto.id_categoria,
            descripcion: producto.descripcion,
            precio : producto.precio,
        }));

        res.json(productos);

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
};

const getInfoPedidos = async (req, res) => {
    try {
        const results = await obtener_pedido();

        if (results.length === 0) {
            return res.status(404).json({ error: 'No se encontraron los pedidos' });
        }

        const pedidos = results.map(pedido => ({
            id: pedido.id_pedido,
            id_cliente: pedido.id_cliente,
            fecha_pedido: pedido.fecha_pedido,
            fecha_entrega: pedido.fecha_entrega,
            pago : pedido.pago,
            estado: producto.estado === 'pendiente' 
            ? 'pendiente' 
            : producto.estado === 'en proceso' 
            ? 'en proceso'
            : producto.estado === 'entregado'
            ? 'entregado'
            : 'cancelado'
        }));

        res.json(pedidos);

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error al obtener los pedidos' });
    }
};

const getInfoUsuarios = async (req, res) => {
    try {
        const results = await obtener_usuarios();

        if (results.length === 0) {
            return res.status(404).json({ error: 'No se encontraron los clientes' });
        }

        const usuarios = results.map(usuario => ({
            id: usuario.id_cliente,
            nombre: usuario.nombre_completo,
            email: usuario.email,
            telefono: usuario.telefono,
            direccion: usuario.direccion,
            tipo : usuario.tipo ? 'admin' : 'cliente'
        }));

        res.json(usuarios);

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
};

const onDelete = async (req, res) => {
    try {
        const id = req.params.id;
        const tabla = req.params.tabla;
        const results = await borrarElemento(tabla, id);
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'No se encontró el elemento' });
        }
        res.json({ success: 'Elemento borrado' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error al borrar el elemento' });
    }
}


module.exports = {
    getInfoCategorias,
    getInfoTamanos,
    getInfoSabores,
    getInfoRellenos,
    getInfoProductos, 
    getInfoPedidos,
    getInfoUsuarios, 
    onDelete
};