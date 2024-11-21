const path = require('path');
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');
const db = require('../db'); // Se ocupa la conexión a la base de datos

// Configuración de multer para almacenar las imágenes
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

const handlePedidoEspecial = async (req, res) => {
    const { categoria, sabor, relleno, tamaño } = req.body;
    const imagen = req.file ? req.file.filename : null;

    try {
        const query = 'INSERT INTO pedido (categoria, sabor, relleno, tamaño, imagen) VALUES (?, ?, ?, ?, ?)';
        const values = [categoria, sabor, relleno, tamaño, imagen];
        await db.query(query, values);

        res.json({ success: true, message: 'Pedido enviado correctamente' });
    } catch (err) {
        console.error('Error en la consulta:', err);
        res.status(500).json({ success: false, message: 'Error en el servidor' });
    }
};

module.exports = {
    upload,
    handlePedidoEspecial
};
