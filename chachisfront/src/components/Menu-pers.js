import React from 'react';
import './estilos/Menu-Items.css';
import p1 from './cakes/personalizado/nanami-cake.png';
import p2 from './cakes/personalizado/coraline-cake.png';
import p3 from './cakes/personalizado/pozole-cake.png';
import p4 from './cakes/personalizado/shoe-cake.png';
import p5 from './cakes/personalizado/dog-cake.png';
import p6 from './cakes/personalizado/car-cake.png';


function Menu() {
    return (
        <div className="menu-item-container">
            <h1 className="menu-item-title">PASTELES PERSONALIZADOS</h1>
            <div className="grid-container-item">
                <div className="grid-item-bday">
                    <img src={p1} alt="Pastel personalizado" />
                    <button className="add-cart">Agregar al carrito</button>
                    </div>
                    <div className="grid-item-bday">
                    <img src={p2} alt="Pastel personalizado" />
                    <button className="add-cart">Agregar al carrito</button>
                    </div>
                    <div className="grid-item-bday">
                    <img src={p3} alt="Pastel personalizado" />
                    <button className="add-cart">Agregar al carrito</button>
                    </div>
                    <div className="grid-item-bday">
                    <img src={p4} alt="Pastel personalizado" />
                    <button className="add-cart">Agregar al carrito</button>
                    </div>
                    <div className="grid-item-bday">
                    <img src={p5} alt="Pastel personalizado" />
                    <button className="add-cart">Agregar al carrito</button>
                    </div>
                    <div className="grid-item-bday">
                    <img src={p6} alt="Pastel personalizado" />
                    <button className="add-cart">Agregar al carrito</button>
                    </div>
            </div>
        </div>
    );
}

export default Menu;
