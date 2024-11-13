import React from 'react';
import './estilos/RegistroU.css';
import logo from './icons/logo-png.png';

function RegistroU({ isOpen, onClose}) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay-reg" onClick={onClose}>
            <div className="modal-content-reg" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                <img src={logo} alt="Chachis Pastelería Logo" className="modal-logo-reg" />

                <p className='registrarse'>¡Regístrate en Chachis Pastelería!</p>
                <form>
                    <input type="text" placeholder="Nombre Completo" required />
                    <input type="email" placeholder="Email" required />
                    <input type="tel" placeholder="Número de Teléfono" required />
                    <input type="text" placeholder="Dirección" required />
                    <input type="password" placeholder="Contraseña" required />
                    <input type="password" placeholder="Confirmar Contraseña" required />
                    <button type="submit" className="register-button">Registrarme</button>
                </form>
            </div>
        </div>
    );
}

export default RegistroU;