import React, { useState } from 'react';
import './estilos/Login.css';
import logo from './icons/logo-png.png';

function Login({ isOpen, onClose, onOpenRegister, onOpenConfirm }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
            if (response.ok) {
                localStorage.setItem('userEmail', email); // Guardar el email en localStorage
                localStorage.setItem('userTipo', data.user.tipo)
                // Redirigir o realizar alguna acción después del inicio de sesión exitoso
                if (data.user.tipo === 'admin') {
                    window.location.href = '/PA';  // Redirigir al panel de administrador
                } else {
                    window.location.href = '/perfil'; // Redirigir al panel de cliente
                }
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
