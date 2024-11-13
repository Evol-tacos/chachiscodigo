import React from 'react';
import './estilos/Login.css';
import logo from './icons/logo-png.png';

function Login({ isOpen, onClose, onOpenRegister, onOpenConfirm }) {

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                <img src={logo} alt="Chachis Pastelería Logo" className="modal-logo" />
                <p className='texto-principal'>¡Bienvenido a Chachis Pastelería!</p>
                <form>
                    <label>Email</label>
                    <input type="email" placeholder="Email" />
                    <label>Contraseña</label>
                    <input type="password" placeholder="Contraseña" />
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
