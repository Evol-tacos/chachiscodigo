import React from 'react';
import './estilos/addCarrito.css';
import exit from './icons/exit-dark-icon.png';
import cakeimg from './cakes/bday/bday-cake1.png';

function AddCarrito({ onClose }) {
    return (
        <div className="addcarrito-popup">
            <button className="close-button-addCart" onClick={onClose}>
                <img src={exit} alt="Cerrar" className="close-icon-addCart" />
            </button>
            <img src={cakeimg} alt="Producto" className="cake-img-cart" />
            <h2 className="popup-title">Pastel de Cumpleaños</h2>
            <p className="popup-price">$689</p>
            <p className="popup-description">
                Pastel hecho con el amor de mamá decorado para ocasiones especiales.
            </p>
            <div className="select-group">
                <label className="select-label">Tamaño</label>
                <select className="select-input">
                    <option>Escoge el tamaño</option>
                    <option>Chico</option>
                    <option>Mediano</option>
                    <option>Grande</option>
                </select>
                
                <label className="select-label">Sabor</label>
                <select className="select-input">
                    <option>Escoge el sabor</option>
                    <option>Chocolate</option>
                    <option>Vainilla</option>
                    <option>Red Velvet</option>
                </select>
                
                <label className="select-label">Relleno</label>
                <select className="select-input">
                    <option>Escoge el relleno</option>
                    <option>Chocolate</option>
                    <option>Fresa</option>
                    <option>Crema</option>
                </select>

                <label className="select-label">Mensaje</label>
                <input type="text" className="select-input" placeholder="Escribe un mensaje" />
            </div>
            <button className="pagar-button-cart">Agregar al carrito</button>
        </div>
    );
}

export default AddCarrito;
