const db = require('../db'); // Se ocupa la conexión a la base de datos
const generateToken = require('../libs/jwt.js'); // Se ocupa la generación de tokens
const User = require('../models/user.model.js'); // Se ocupa el modelo de usuario
const bcrypt = require('bcryptjs'); //encriptacion de las contraseñas
require('dotenv').config();

// funcion asincrona debido a que no es necesario hacer el login para poder navegar en la pagina
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const results = await User.findByEmail(email);
        if (results.length === 0) {
            return res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
        }
        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.contrasena);
        if (isMatch) {
            const token = generateToken(User);
            res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
            return res.json({ success: true, message: 'Inicio de sesión exitoso', userName: user.nombrecompleto });
        } else {
            return res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
        }
    } catch (err) {
        console.error('Error en la consulta:', err);
        return res.status(500).json({ success: false, message: 'Error en el servidor' });
    }
};

//funcion asincrona debido a que no es necesario hacer el registro para poder navegar en la pagina
const register = async (req, res) => {
    const { nombrecompleto, email, telefono, direccion, contrasena } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(contrasena, 10);//encriptacion de la contraseña
        const results = await User.create(nombrecompleto, email, telefono, direccion, hashedPassword); 
        //se crea el usuario
        const user = { id: results.insertId, email }; //se crea el usuario con el id y el email
        const token =  generateToken(user); 
        //se crea el token con duracion de un dia
        return res.json({ success: true, message: 'Usuario registrado correctamente', token });
    } catch (err) {
        console.error('Error en la consulta:', err);
        return res.status(500).json({ success: false, message: 'Error en el servidor' });
    }
};

const logout = (req, res) => {
    res.clearCookie('token');
    return res.json({ success: true, message: 'Sesión cerrada' });
};

const profile = (req, res) => {
    return res.json({ success: true, message: 'Perfil de usuario' });
};


module.exports = {
    login,
    register,
    logout,
    profile
};