import React from 'react';
import './estilos/Carrito.css';
import exit from './icons/exit-dark-icon.png';
import cakeimg from './cakes/bday/bday-cake3.png';
import cakeimg2 from './cakes/infantil/cake3.png'
import { Link } from 'react-router-dom';

function Carrito({ onClose }) {
    return (
        <div className="carrito-popup">
            <div className="carrito-header">
                <p className='main-text-cart'>Carrito de compras</p>
                <button className="close-button-cart" onClick={onClose}>
                    <img src={exit} alt="Cerrar" className="close-icon-cart" />
                </button>
            </div>
            <div className="cart-content">
                <div className="product-item">
                    <img src={cakeimg} alt="Producto" className="cake-img" />
                    <div className="product-details">
                        <p className='product-name'>PASTEL</p>
                        <p className='product-description'>Descripción</p>
                        <p className='product-price'>Precio</p>
                    </div>
                </div>
                <div className="product-item">
                    <img src={cakeimg2} alt="Producto" className="cake-img" />
                    <div className="product-details">
                        <p className='product-name'>PASTEL</p>
                        <p className='product-description'>Descripción</p>
                        <p className='product-price'>Precio</p>
                    </div>
                </div>
            </div>

            <p className='items-cart'>2 artículo(s) en el carrito</p>
            
            <div className="footer-fixed">
                <p className='total-text'>$TOTAL</p>
                <Link to="/PP">
                <button className='pagar-button'>Pagar</button>
                </Link>
            </div>
        </div>
    );
}

export default Carrito;