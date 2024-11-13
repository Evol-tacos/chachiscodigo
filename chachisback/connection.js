
const mysql = require('mysql2');
//conexion a la base de datos
const connection = mysql.createPool({
    host: process.env.HOSTDB || 'localhost',
    user: process.env.USERDB || 'root',
    database: process.env.DATABASE || 'chachispasteleria',
    password: process.env.PASSWORDDB ||'',
    port: process.env.PORTDB || 53110
});

module.exports = connection;
