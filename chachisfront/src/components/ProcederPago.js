import React, {useState} from 'react';
import './estilos/ProcederPago.css';
import cakeimg from './cakes/bday/bday-cake3.png';
import cakeimg2 from './cakes/infantil/cake3.png'
import ShoppingCart from './Carrito.js';
import Up from './Upload.js';

function ProcederPago() {
    const [showShoppingCart, setShowShoppingCart] = useState(false);
    const [showUp, setShowUp] = useState(false);

    const toggleShoppingCart = () => {
        setShowShoppingCart(!showShoppingCart);
    };

    const toggleUp = () => {
        setShowUp(!showUp);
    };
    return (
        <div className="menu-item-container">
            <div className='main-text-container'>
                <h1 className="pp-title2">CARRITO</h1>
                <h1 className="pp-title2">&gt;</h1>
                <h1 className="pp-title">PROCEDER AL PAGO</h1>
                <h1 className="pp-title2">&gt;</h1>
                <h1 className="pp-title2">PAGAR</h1>
                <h1 className="pp-title2">&gt;</h1>
                <h1 className="pp-title2">PEDIDO COMPLETADO</h1>
            </div>

            {/* Resumen del pedido */}
            <div className="order-content">
                <div className='titles-container'>
                    <p className='order-title1'>Resumen del pedido</p>
                    <p className='order-title2' onClick={toggleShoppingCart}>Ver artículos &gt;</p>
                </div>
                <div className='image-price-container'>
                    <div className="image-item">
                        <img src={cakeimg} alt='Pedido' className='order-img' />
                        <p className='price-text'>$XXX</p>
                    </div>
                    <div className="image-item">
                        <img src={cakeimg2} alt='Pedido' className='order-img' />
                        <p className='price-text'>$XXX</p>
                    </div>
                </div>
            </div>

            <div className='espacio-content'></div>

            <div className='order-content'>
                <p className='order-title1'>Selecciona tu fecha de entrega y hora</p>
                <p className='order-subtext'>Tu fecha de entrega debe estar entre dos días y cinco meses después de la fecha de compra.</p>
                <div className="date-picker-container">
                    <label htmlFor="date-picker">Fecha:</label>
                    <input
                        id="date-picker"
                        type="date"
                        className="date-picker"
                        min={getMinDate()}
                        max={getMaxDate()}
                    />
                </div>
            </div>

            <button className="pagar-button-pp" onClick={toggleUp}>PAGAR</button>
            {showShoppingCart && <ShoppingCart onClose={toggleShoppingCart} />}
            {showUp && <Up onClose={toggleUp} />}
        </div>
    );
}

// Función para obtener fechas mínimas y máximas
function getMinDate() {
    const today = new Date();
    today.setDate(today.getDate() + 2); // Fecha mínima en 2 días
    return today.toISOString().split("T")[0];
}

function getMaxDate() {
    const today = new Date();
    today.setMonth(today.getMonth() + 5); // Fecha máxima en 5 meses
    return today.toISOString().split("T")[0];
}

export default ProcederPago;