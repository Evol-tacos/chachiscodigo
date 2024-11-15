import React from 'react';
import './estilos/Menu-Items.css';
import inf1 from './cakes/infantil/cake1.png';
import inf2 from './cakes/infantil/cake2.png';
import inf3 from './cakes/infantil/cake3.png';
import inf4 from './cakes/infantil/cake4.png';
import inf5 from './cakes/infantil/cake5.png';
import inf6 from './cakes/infantil/cake6.png';


function Menu() {
    return (
        <div className="menu-item-container">
            <h1 className="menu-item-title">PASTELES INFANTILES</h1>
            <div className="grid-container-item">
                <div className="grid-item-bday">
                    <img src={inf1} alt="Pastel de Cumpleaños Infantil" />
                    <button className="add-cart">Agregar al carrito</button>
                    </div>
                    <div className="grid-item-bday">
                    <img src={inf2} alt="Pastel de Cumpleaños Infantil" />
                    <button className="add-cart">Agregar al carrito</button>
                    </div>
                    <div className="grid-item-bday">
                    <img src={inf3} alt="Pastel de Cumpleaños Infantil" />
                    <button className="add-cart">Agregar al carrito</button>
                    </div>
                    <div className="grid-item-bday">
                    <img src={inf4} alt="Pastel de Cumpleaños Infantil" />
                    <button className="add-cart">Agregar al carrito</button>
                    </div>
                    <div className="grid-item-bday">
                    <img src={inf5} alt="Pastel de Cumpleaños Infantil" />
                    <button className="add-cart">Agregar al carrito</button>
                    </div>
                    <div className="grid-item-bday">
                    <img src={inf6} alt="Pastel de Cumpleaños Infantil" />
                    <button className="add-cart">Agregar al carrito</button>
                    </div>
            </div>
        </div>
    );
}

export default Menu;
