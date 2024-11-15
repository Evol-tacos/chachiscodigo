const app = require('./app');
const config = require('./config');
require('./db'); // Asegurarse de que la conexión a la base de datos se establezca

const PORT = config.app.port;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});