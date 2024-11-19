import React from 'react';
import './estilos/categorias.css';
import CakePiece from './icons/cake-piece-icon.png';
import exit from './icons/exit-dark-icon.png';
import { Link } from 'react-router-dom';

function Categorias({ onClose }) {
    return (
        <div className="categoria-popup">
            <div className="category-header">
                <p className="title-header-category">CATEGORÍAS</p>
                <button className="close-button-category" onClick={onClose}>
                    <img src={exit} alt="Cerrar" className="close-icon-category" />
                </button>
            </div>
            <div className="category-content">
            <div className="category-item">
                    <img src={CakePiece} alt="Icono Cumpleaños" className="cake-piece-img" />
                    <Link to="/bday" className="category-name">
                        Cumpleaños
                    </Link>
                </div>
                <div className="category-item">
                    <img src={CakePiece} alt="Icono Infantil" className="cake-piece-img" />
                    <Link to="/infantil" className="category-name">
                        Infantil
                    </Link>
                </div>
                <div className="category-item">
                    <img src={CakePiece} alt="Icono Boda" className="cake-piece-img" />
                    <Link to="/wedding" className="category-name">
                        Boda
                    </Link>
                </div>
                <div className="category-item">
                    <img src={CakePiece} alt="Icono Personalizado" className="cake-piece-img" />
                    <Link to="/personalizado" className="category-name">
                        Personalizado
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Categorias;