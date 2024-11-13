import React from 'react';
import logo from './icons/logo-chachis-circle.png'
import './estilos/Main.css';

function Main() {
    return (
        <section className="main">
            <div className="slogan">
                <h2>Sabor de hogar, horneado con amor</h2>
                <p>Chachis Pastelería, emprendimiento hermosillense con un dulce sabor familiar</p>
            </div>
            <div className="logo-center">
                <img src={logo} alt="Chachis Pastelería Logo" />
            </div>
        </section>
    );
}

export default Main;
