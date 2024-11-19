import React from 'react';
import './estilos/Header.css';
import { Link } from 'react-router-dom';
import otherlogo from './icons/logo-png.png';
import tipografia from './icons/Chachis-tipografia.png';

function Menu() {

    return (
        <header className="header">
            <div className="logo-container">
                <div className="logo">
                    <Link to="/" className="logo">
                        <img src={otherlogo} alt="Logo Chachis Pastelería" />
                    </Link>
                </div>
                <Link to="/">
                    <img className="tipografia-menu" src={tipografia} alt="Chachis Pastelería" />
                </Link>
                
            </div>
            <p className='login-text right-space'>Admin</p>
        </header>
    );
}

export default Menu;