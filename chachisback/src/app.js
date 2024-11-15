const express = require('express');
const config = require('./config.js');
const cors = require('cors');
const authRoutes =require('./routes/auth.routes.js');

const app = express();
app.set('port', config.app.port);
// Configurar CORS
const corsOptions = {
    origin: 'http://localhost:3000', // Cambia esto al origen de tu frontend
    credentials: true, // Esto permite el envío de cookies
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(authRoutes);

module.exports = app;