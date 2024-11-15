import React, {useState} from 'react';
import './estilos/Menu-Items.css';
import AddCart from './addCarrito.js';
import bday1 from './cakes/bday/bday-cake1.png';
import bday2 from './cakes/bday/bday-cake2.png';
import bday3 from './cakes/bday/bday-cake3.png';
import bday4 from './cakes/bday/bday-cake4.png';
import bday5 from './cakes/bday/bday-cake5.png';
import bday6 from './cakes/bday/bday-cake6.png';

function MenuCumple() {
    const [isAddOpen, setIsAddOpen] = useState(false);

    // Función para mostrar el pop-up
    const handleAddToCart = () => {
        setIsAddOpen(true);
    };

    // Función para cerrar el pop-up
    const handleClosePopup = () => {
        setIsAddOpen(false);
    };
    return (
        <div className="menu-item-container">
            <h1 className="menu-item-title">PASTELES DE CUMPLEAÑOS</h1>
            <div className="grid-container-item">
                <div className="grid-item-bday">
                    <img src={bday1} alt="Pastel de Cumpleaños" />
                    <button className="add-cart" onClick={handleAddToCart}>Agregar al carrito</button>
                </div>
                <div className="grid-item-bday">
                    <img src={bday2} alt="Pastel de Cumpleaños" />
                    <button className="add-cart">Agregar al carrito</button>
                </div>
                <div className="grid-item-bday">
                    <img src={bday3} alt="Pastel de Cumpleaños" />
                    <button className="add-cart">Agregar al carrito</button>
                </div>
                <div className="grid-item-bday">
                    <img src={bday4} alt="Pastel de Cumpleaños" />
                    <button className="add-cart">Agregar al carrito</button>
                </div>
                <div className="grid-item-bday">
                    <img src={bday5} alt="Pastel de Cumpleaños" />
                    <button className="add-cart">Agregar al carrito</button>
                </div>
                <div className="grid-item-bday">
                    <img src={bday6} alt="Pastel de Cumpleaños" />
                    <button className="add-cart">Agregar al carrito</button>
                </div>
            </div>
            {isAddOpen && <AddCart onClose={handleClosePopup} />}
        </div>
    );
}

export default MenuCumple;