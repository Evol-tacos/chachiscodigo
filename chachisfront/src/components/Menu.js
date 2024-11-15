import React from 'react';
import './estilos/Menu.css';
import { Link } from 'react-router-dom';
import bday from './cakes/cake-bday.png'; // Imagen del pastel de cumpleaños
import infantil from './cakes/child-cake.png'; // Imagen del pastel infantil
import wedding from './cakes/wedding-cake.png'; // Imagen del pastel de boda
import personal from './cakes/random-cake.png'; // Imagen del pastel personalizado

function Menu() {
    return (
        <div className="menu-item-container">
            
            <h1 className="menu-item-title">MENÚ DE CHACHIS</h1>
            
            <div className="grid-container">
                <div className="grid-item">
                    <Link to="/bday">
                    <img src={bday} alt="Pastel de Cumpleaños" />
                    </Link>
                    <p>Cumpleaños</p>
                </div>
                <div className="grid-item">
                    <Link to="/infantil">
                    <img src={infantil} alt="Pastel Infantil" />
                    </Link>
                    <p>Infantil</p>
                </div>
                <div className="grid-item">
                    <Link to="/wedding">
                    <img src={wedding} alt="Pastel de Boda" />
                    </Link>
                    <p>Boda</p>
                </div>
                <div className="grid-item">
                    <Link to="/personalizado">
                    <img src={personal} alt="Pastel Personalizado" />
                    </Link>
                    <p>Personalizado</p>
                </div>
            </div>
        </div>
    );
}

export default Menu;
