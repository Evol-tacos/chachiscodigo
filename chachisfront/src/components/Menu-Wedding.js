import React from 'react';
import './estilos/Menu-Items.css';
import w1 from './cakes/wedding/wedding-cake1.png';
import w2 from './cakes/wedding/wedding-cake2.png';


function Menu() {
    return (
        <div className="menu-item-container">
            <h1 className="menu-item-title">PASTELES DE BODA</h1>
            <div className="grid-container-item-W">
                <div className="grid-item-bday">
                    <img src={w1} alt="Pastel personalizado" />
                    <button className="add-cart">Agregar al carrito</button>
                    </div>
                    <div className="grid-item-bday">
                    <img src={w2} alt="Pastel personalizado" />
                    <button className="add-cart">Agregar al carrito</button>
                    </div>
            </div>
        </div>
    );
}

export default Menu;
