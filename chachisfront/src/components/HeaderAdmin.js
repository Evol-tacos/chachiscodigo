import React, { useContext } from 'react';
import './estilos/Header.css';
import { Link } from 'react-router-dom';
import otherlogo from './icons/logo-png.png';
import tipografia from './icons/Chachis-tipografia.png';
import { AuthContext } from './AuthContext.js';

function Menu() {
    const { handleLogout } = useContext(AuthContext);

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
            <div className="logo-container">
                <p className='login-text'>Admin</p>
                <span className="login-text" onClick={handleLogout}>Cerrar sesión</span>
            </div>
        </header>
    );
}

export default Menu;