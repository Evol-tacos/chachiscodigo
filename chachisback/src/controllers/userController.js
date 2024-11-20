// controllers/user.controller.js
const User = require('../models/user.model');

const getInfoUsuario = async (req, res) => {
    try {
        // Obtener email de query params o params de ruta
        const userEmail = req.query.email || req.params.email;

        if (!userEmail) {
            return res.status(400).json({ error: 'El email del usuario no fue proporcionado' });
        }

        const results = await User.findByEmail(userEmail);

        if (results.length === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const user = results[0];

        res.json({
            nombreCompleto: user['nombre completo'],
            email: user.email,
            telefono: user.telefono,
            direccion: user.direccion,
            password: '' 
        });

    } catch (error) {
        console.error('Error:', error); // Para debugging
        res.status(500).json({ error: 'Error al obtener los datos del usuario' });
    }
};

module.exports = { getInfoUsuario };