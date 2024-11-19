import React, { useState } from 'react';
import './estilos/Header.css';
import { Link } from 'react-router-dom';
import otherlogo from './icons/logo-png.png';
import tipografia from './icons/Chachis-tipografia.png';
import user from './icons/icono-user.png';
import shop from './icons/bag-icon.png';
import dots from './icons/menu-icon.png';
import Carrito from './Carrito.js';
import Categorias from './Categorias.js';

function Menu() {
    const [showCarrito, setShowCarrito] = useState(false);
    const [showCategory, setShowCategory] = useState(false);

    const toggleCarrito = () => {
        setShowCarrito(!showCarrito);
    };
    const toggleCategory = () => {
        setShowCategory(!showCategory);
    };

    return (
        <header className="header-menu">
            <div className="logo-container-menu">
                <div className="logo">
                    <Link to="/" className="logo">
                        <img src={otherlogo} alt="Logo Chachis Pastelería" />
                    </Link>
                </div>
                <Link to="/">
                    <img className="tipografia-menu" src={tipografia} alt="Chachis Pastelería" />
                </Link>
            </div>
            <nav>
                <Link to="/perfil">
                    <img src={user} className="iconos" alt="Usuario" />
                </Link>
                <img
                    src={shop}
                    className="iconos"
                    alt="Carrito de compras"
                    onClick={toggleCarrito} // Agregar evento de clic
                />
                <img src={dots} 
                className="icono-menu" 
                alt="Más funciones" 
                onClick={toggleCategory}
                />
            </nav>
            {showCarrito && <Carrito onClose={toggleCarrito} />}
            {showCategory && <Categorias onClose={toggleCategory} />}
        </header>
    );
}

export default Menu;