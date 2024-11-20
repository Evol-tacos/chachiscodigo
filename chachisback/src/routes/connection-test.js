const express = require('express');
const router = express.Router();
const db = require('chachisback/src/db');

router.get('/api/test-connection', (req, res) => {
    db.getConnection((err, connection) => {
        if (err) {
            console.error('Error al conectar:', err);
            return res.status(500).json({
                success: false,
                message: 'Error al conectar con la base de datos',
                error: err.message
            });
        }

        // Realizar consulta de prueba
        connection.query('SELECT 1 + 1 AS result', (error, results) => {
            connection.release(); // Siempre liberar la conexión

            if (error) {
                return res.status(500).json({
                    success: false,
                    message: 'Error en consulta de prueba',
                    error: error.message
                });
            }

            res.json({
                success: true,
                message: 'Conexión exitosa a la base de datos',
                results: results,
                config: {
                    host: process.env.HOSTDB || 'localhost',
                    database: process.env.DATABASE || 'chachis_bakery_db',
                    port: process.env.PORTDB || 3306
                }
            });
        });
    });
});

module.exports = router;