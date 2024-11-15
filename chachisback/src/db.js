const mysql = require('mysql2');
// Conexión a la base de datos
const db = mysql.createPool({
    host: process.env.HOSTDB || 'localhost',
    user: process.env.USERDB || 'root',
    database: process.env.DATABASE || 'chachis_bakery_db',
    password: process.env.PASSWORDDB || '',
    port: process.env.PORTDB || 3306 // Cambia esto al puerto correcto si es necesario
});

// Verificar la conexión
db.getConnection((err, connection) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
    connection.release(); // Liberar la conexión de vuelta al pool
});

module.exports = db;
