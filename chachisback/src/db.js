const mysql = require('mysql2');
// Conexión a la base de datos
const db = mysql.createPool({
    host: process.env.HOSTDB || 'localhost', // Cambia 'localhost' a 'chachis_mysql'
    user: process.env.USERDB || 'chachisuser',
    database: process.env.DATABASE || 'chachis_bakery_db',
    password: process.env.PASSWORDDB || 'userpassword', // Asegúrate de que coincida con el archivo docker-compose
    port: process.env.PORTDB || 3306, // Cambia 3306 a 3307
    charset: 'utf8mb4'
});

// Verificar la conexión
db.getConnection((err, connection) => { 
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
    connection.release();
});

module.exports = db;
