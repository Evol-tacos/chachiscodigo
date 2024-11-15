import React from 'react';
import './estilos/CambiarContra.css'; // Asegúrate de crear el archivo de estilos
import logo from './icons/logo-chachis-circle.png';

function CambiarContra({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay-rec" onClick={onClose}>
            <div className="modal-content-rec" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                <img src={logo} alt="Chachis Pastelería Logo" className="modal-logo-reg" />
                <p className='mainText'>Ingresa tu nueva contraseña</p>
                <form>
                    <p className='page-texto alinear'>Escriba su nueva contraseña</p>
                    <input type="password" placeholder="Contraseña" required  className='input-alinear'/>
                    <p className='page-texto alinear'>Confirme su nueva contraseña</p>
                    <input type="password" placeholder="Confirmar Contraseña" required className='input-alinear'/>
                    <button type="submit" className="confirm-button">Cambiar contraseña</button>
                </form>
            </div>
        </div>
    );
}

export default CambiarContra;