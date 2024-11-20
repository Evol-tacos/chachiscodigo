const express = require('express');
const app = require('./app');
const config = require('./config');
const connectionTestRoutes = require('./routes/connection-test');
const userRoutes = require('./routes/user.routes');
const adminRoutes = require('./routes/admin.routes');
require('./db'); // Asegurarse de que la conexión a la base de datos se establezca

const PORT = config.app.port || 4000;

// Agregar las rutas de prueba
app.use('/', connectionTestRoutes);

app.use(userRoutes);

app.use(adminRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});