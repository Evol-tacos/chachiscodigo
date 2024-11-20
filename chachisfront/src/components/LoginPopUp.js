import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './estilos/Login.css';
import logo from './icons/logo-png.png';
import { AuthContext } from './AuthContext.js';

function Login({ isOpen, onClose, onOpenRegister, onOpenConfirm }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setIsAuthenticated, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
                credentials: 'include', // Esto asegura que las cookies se envíen con la solicitud
            });

            const data = await response.json();
            if (response.ok && data.user) {
                setIsAuthenticated(true);
                setUser(data.user);
                localStorage.setItem('userName', data.user.nombrecompleto);
                // Redirigir a la página del menú después del inicio de sesión exitoso
                navigate('/menu');
            } else {
                // Manejar errores
                console.error(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                <img src={logo} alt="Chachis Pastelería Logo" className="modal-logo" />
                <p className='texto-principal'>¡Bienvenido a Chachis Pastelería!</p>
                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Contraseña</label>
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="login-button">Iniciar sesión</button>
                </form>
                <label className="link" onClick={() => {
                    onClose();
                    onOpenConfirm();
                }}>¿Olvidaste tu contraseña?</label>
                <label className="link" onClick={() => {
                    onClose(); // Cierra el pop-up de inicio de sesión
                    onOpenRegister(); // Abre el pop-up de registro
                }}>
                    ¿No tienes una cuenta en Chachis Pastelería?
                </label>
            </div>
        </div>
    );
}

export default Login;