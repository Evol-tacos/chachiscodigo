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


    const obtener_categoria = () => obtenerTabla('SELECT * FROM categoria');
    const obtener_tamano = () => obtenerTabla('SELECT * FROM tamanos');
    const obtener_sabor = () => obtenerTabla('SELECT * FROM sabores');
    const obtener_relleno = () => obtenerTabla('SELECT * FROM rellenos');
    const obtener_pedido = () => obtenerTabla('SELECT * FROM pedido');
    const obtener_usuarios  = () => obtenerTabla('SELECT * FROM clientes');
    const obtener_producto = () => obtenerTabla('SELECT * FROM producto');

module.exports = { obtenerTabla, borrarElemento,
    obtener_categoria, obtener_tamano,
    obtener_sabor, obtener_relleno, 
    obtener_pedido, obtener_usuarios, 
    obtener_producto };

