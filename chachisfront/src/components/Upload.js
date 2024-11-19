import React, { useState } from 'react';
import './estilos/Upload.css';
import exit from './icons/exit-dark-icon.png';
import Datos from './img/datos.png';
import subir from './icons/upload-icon-white.png';
import SC from './SubirComprobante.js';

function Update({ onClose }) {
    const [isSCOpen, setIsSCOpen] = useState(false); // Estado para SubirComprobante
    const [isHidden, setIsHidden] = useState(false); // Controlar visibilidad de Update

    const openSC = () => {
        setIsHidden(true); // Oculta visualmente la ventana actual
        setIsSCOpen(true); // Abre SubirComprobante
    };

    const closeSC = () => {
        setIsSCOpen(false); // Cierra SubirComprobante
        setIsHidden(false); // Reaparece la ventana actual
    };

    return (
        <>
            {!isHidden && ( // Solo muestra si no está oculto
                <div className="upload-popup">
                    <div className="up-header">
                        <p className="title-header-up">Subir comprobante</p>
                        <button className="close-button-up" onClick={onClose}>
                            <img src={exit} alt="Cerrar" className="close-icon-up" />
                        </button>
                    </div>
                    <div className="upload-content">
                        <img src={Datos} alt="Información bancaria" className="tamaño-img" />
                        <button className="subir-button" onClick={openSC}>
                            <img src={subir} alt="icono" className="subir-icono" />
                            Subir comprobante
                        </button>
                    </div>
                </div>
            )}
            {isSCOpen && (
                <SC
                    isOpen={isSCOpen}
                    onClose={closeSC} // Cierra SubirComprobante
                />
            )}
        </>
    );
}

export default Update;
