const db = require('../db');

const obtenerTabla = (query) => {
    return new Promise((resolve, reject) => {
        db.query(query, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

const obtenerFilaPedido = (id) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM pedido WHERE id_pedido = ?`;
        db.query(query, [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

const borrarElemento = (tabla, id) => {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM ${tabla} WHERE id_${tabla} = ?`;
        db.query(query, [id], (err, results) => { 
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

const obtenerFila = (id) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM detallepedido WHERE id_detalle = ?`;
        db.query(query, [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

const editarElemento = (tabla, id,  elemento) => {
    return new Promise((resolve, reject) => {

        const columnas = Object.keys(elemento)
        const valores = Object.values(elemento);

        const setClause = columnas.map(col => `${col} = ?`).join(", ");

        const query = `UPDATE ${tabla} SET ${setClause} WHERE id_${tabla} = ?`;

        db.query(query, [...valores, id], (err, results) => {
            if (err) {
                console.error("Error al ejecutar la consulta:", err);
                return reject(new Error("Error al actualizar el elemento en la base de datos"));
            }
            resolve(results);
        });
    });
};

const agregarElemento = (tabla, elemento) => {
    return new Promise((resolve, reject) => {

        // Preparar columnas y valores
        const columnas = Object.keys(elemento).join(", ");
        const valores = Object.values(elemento);

        // Crear placeholders para prevenir inyección SQL
        const placeholders = valores.map(() => "?").join(", ");

        // Construir la consulta SQL de inserción
        const query = `INSERT INTO ?? (${columnas}) VALUES (${placeholders})`;

        // Ejecutar la consulta en la base de datos
        db.query(query, [tabla, ...valores], (err, results) => {
            if (err) {
                console.error("Error al ejecutar la consulta:", err);
                return reject(new Error("Error al insertar el elemento en la base de datos"));
            }

            // Resolver con los resultados de la inserción
            resolve(results);
        });
    });
};


    const obtener_categoria = () => obtenerTabla('SELECT * FROM categoria');
    const obtener_tamano = () => obtenerTabla('SELECT * FROM tamano');
    const obtener_sabor = () => obtenerTabla('SELECT * FROM sabor');
    const obtener_relleno = () => obtenerTabla('SELECT * FROM relleno');
    const obtener_pedido = () => obtenerTabla('SELECT * FROM pedido');
    const obtener_usuarios  = () => obtenerTabla('SELECT * FROM cliente');
    const obtener_producto = () => obtenerTabla('SELECT * FROM producto');

module.exports = { obtenerTabla, borrarElemento,
    obtener_categoria, obtener_tamano,
    obtener_sabor, obtener_relleno, 
    obtener_pedido, obtener_usuarios, 
    obtener_producto, agregarElemento, 
    editarElemento, obtenerFila, obtenerFilaPedido };

