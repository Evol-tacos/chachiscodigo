import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext.js';
import otherlogo from './icons/logo-png.png';
import tipografia from './icons/Chachis-tipografia.png';
import Login from './LoginPopUp';
import RegistroU from './RegistroU';
import RecuperarC from './RecuperarContra.js';
import CambiarC from './CambiarContra.js';
import iconoUser from './icons/icono-user.png';

function Header() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isRecuperarOpen, setIsRecuperarOpen] = useState(false);
    const [isChangeOpen, setIsChangeOpen] = useState(false);

    const openLogin = () => {
        setIsRegisterOpen(false);
        setIsRecuperarOpen(false);
        setIsChangeOpen(false);
        setIsLoginOpen(true);
    };

    const closeLogin = () => setIsLoginOpen(false);

    const openRegister = () => {
        setIsLoginOpen(false);
        setIsRegisterOpen(true);
    };

    const closeRegister = () => setIsRegisterOpen(false);

    const openConfirm = () => {
        setIsChangeOpen(false);
        setIsLoginOpen(false);
        setIsRecuperarOpen(true);
    };

    const closeRecuperar = () => setIsRecuperarOpen(false);

    const openChange = () => {
        setIsLoginOpen(false);
        setIsRecuperarOpen(false);
        setIsChangeOpen(true);
    };

    const closeChange = () => setIsChangeOpen(false);

    const { isAuthenticated, handleLogout, userName } = useContext(AuthContext);


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
                {isAuthenticated ? (
                    <>
                        <img src={iconoUser} alt="Usuario" className="user-icon" />
                        <span className="user-name">{userName}</span>
                        <span onClick={handleLogout} className="login-text">Cerrar sesión</span>
                    </>
                ) : (
                    <span onClick={openLogin} className="login-text">Iniciar sesión</span>
                )}
                <Link to="/menu" className="login-text">Menú</Link>
            </nav>

            {/* Componente LoginModal */}
            <Login
                isOpen={isLoginOpen}
                onClose={closeLogin}
                onOpenRegister={openRegister}
                onOpenConfirm={openConfirm}  
                onOpenChange={openChange} // Prop para abrir el cambio de contraseña
            />

            {/* Componente RegistroU */}
            <RegistroU
                isOpen={isRegisterOpen}
                onClose={closeRegister}
                openLogin={openLogin} // Asegúrate de pasar esta prop
            />

            {/* Componente RecuperarC */}
            <RecuperarC
                isOpen={isRecuperarOpen}
                onClose={closeRecuperar}
                onOpenChange={openChange} // Asegúrate de pasar esta prop
            />

            <CambiarC
                isOpen={isChangeOpen}
                onClose={closeChange}
            />
        </header>
    );
}

export default Header;