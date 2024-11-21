const express = require('express');
const config = require('./config.js');
const path = require('path');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes.js');
const pedidoEspecialRoutes = require('./routes/pedidoespecial.routes.js');

const app = express();
app.set('port', config.app.port);
// Configurar CORS
const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:5173'], // Cambia esto al origen de tu frontend
    credentials: true, // Esto permite el envío de cookies
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(authRoutes);
app.use(pedidoEspecialRoutes);
// Subir archivos estáticos desde la carpeta 'uploads'
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Ruta básica de prueba
app.get('/', (req, res) => {
    res.json({ message: 'API funcionando correctamente' });
});

module.exports = app;