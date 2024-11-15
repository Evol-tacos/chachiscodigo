const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret';

const generateToken = (user) => {
    return jwt.sign({ id: user.id, email: user.email }, jwtSecret, { expiresIn: '1h' });
};

module.exports = generateToken;