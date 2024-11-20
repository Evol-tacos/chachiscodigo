import React from 'react';
import './estilos/SubirC.css';
import logo from './icons/logo-chachis-circle.png';

function SubirComprobante({ isOpen, onClose }) {
    if (!isOpen) return null; 

    return (
        <div className="modal-overlay-SC" onClick={onClose}>
            <div className="modal-content-rec" onClick={(e) => e.stopPropagation()}>
                <button className="close-button-SC" onClick={onClose}>X</button>
                <img src={logo} alt="Chachis Pastelería Logo" className="modal-logo-reg" />
                <p className="mainText">Sube tu comprobante de pago para validar tu compra, 
                    se te enviará un correo electrónico si tu pago ha sido exitoso</p>
                    <button className="upload-button-SC" onClick={() => document.getElementById('fileInput').click()}>
                    Subir imagen del comprobante
                    </button>
                    <input
                    type="file"
                    id="fileInput"
                    style={{ display: 'none' }}
                    accept="image/*"
                    onChange={(e) => console.log(e.target.files[0])} 
                    />
                <button className="subir-button-SC" onClick={onClose}>Subir archivo
                </button>
            </div>
        </div>
    );
}

export default SubirComprobante;
