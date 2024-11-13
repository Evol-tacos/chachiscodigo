import React from 'react';
import './estilos/RecuperarContra.css'; // Asegúrate de crear el archivo de estilos
import logo from './icons/logo-chachis-circle.png';

function RecuperarC({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay-rec" onClick={onClose}>
            <div className="modal-content-rec" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                <img src={logo} alt="Chachis Pastelería Logo" className="modal-logo-reg" />
                <p className='mainText'>Se te enviará un código, confirma tu correo electrónico</p>
                <form>
                    <input type="text" placeholder="Email" required />
                    <button type="submit" className="confirm-button">CONFIRMAR</button>
                </form>
            </div>
        </div>
    );
}

export default RecuperarC;