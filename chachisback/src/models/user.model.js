const db = require('../db');

const User = {
    findByEmail: (email) => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM clientes WHERE email = ?';
            db.query(query, [email], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    },
    create: (nombrecompleto, email, telefono, direccion, contrasena) => {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO clientes (`nombre completo`, email, telefono, direccion, contrasena) VALUES (?, ?, ?, ?, ?)';
            db.query(query, [nombrecompleto, email, telefono, direccion, contrasena], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    }
};

module.exports = User;