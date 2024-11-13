import React from 'react';
import './estilos/Header.css';
import { Link } from 'react-router-dom';
import otherlogo from './icons/logo-png.png'; //Logo cupcake sin letras
import tipografia from './icons/Chachis-tipografia.png'; //Nombre del negocio
import user from './icons/icono-user.png'; //icono del usuario
import shop from './icons/bag-icon.png'; //icono de lista de compras
import dots from './icons/menu-icon.png';

function Menu() {
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
                <img src={user} className="iconos" alt="Usuario"/>
                </Link>
                <img src={shop} className='iconos' alt="Carrito de compras" />
                <img src={dots} className='icono-menu' alt="Más funciones"/>
            </nav>
        </header>
    );
}

    export default Menu;