import React, { useState } from 'react';
import './estilos/Header.css';
import otherlogo from './icons/logo-png.png';
import { Link } from 'react-router-dom';
import tipografia from './icons/Chachis-tipografia.png';
import Login from './LoginPopUp.js';
import RegistroU from './RegistroU.js';
import RecuperarC from './RecuperarContra.js';

function Header() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);

    const openLogin = () => {
        setIsRegisterOpen(false);
        setIsConfirmOpen(false);
        setIsLoginOpen(true);
    };

    const closeLogin = () => setIsLoginOpen(false);

    const openRegister = () => {
        setIsLoginOpen(false);
        setIsRegisterOpen(true);
    };

    const closeRegister = () => setIsRegisterOpen(false);

    const openConfirm = () => {
        setIsLoginOpen(false);
        setIsConfirmOpen(true);
    };

    const closeConfirm = () => setIsConfirmOpen(false);

    return (
        <header className="header">
            <div className="logo-container">
                <div className="logo">
                    <Link to="/">
                        <img src={otherlogo} alt="Logo Chachis Pastelería"/>
                    </Link>
                </div>
                <Link to="/">
                    <img className="tipografia" src={tipografia} alt="Chachis Pastelería"/>
                </Link>
            </div>
            <nav>
                <span onClick={openLogin} className="login-text">Iniciar sesión</span>
                <Link to="/menu" className="login-text">Menú</Link>
            </nav>

            {/* Componente LoginModal */}
            <Login
                isOpen={isLoginOpen}
                onClose={closeLogin}
                onOpenRegister={openRegister}
                onOpenConfirm={openConfirm} // Prop para abrir el registro
            />

            {/* Componente RegistroU */}
            <RegistroU
                isOpen={isRegisterOpen}
                onClose={closeRegister}
            />

            {/* Componente RecuperarC */}
            <RecuperarC
                isOpen={isConfirmOpen}
                onClose={closeConfirm}
            />
        </header>
    );
}

export default Header;