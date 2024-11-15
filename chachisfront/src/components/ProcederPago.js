import React from 'react';
import './estilos/ProcederPago.css';
import cakeimg from './cakes/bday/bday-cake3.png';
import cakeimg2 from './cakes/infantil/cake3.png'

function ProcederPago() {
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
            <div className="order-content">
                <div className='titles-container'>
                <p className='order-title1'>Resúmen del pedido</p>
                <p className='order-title2'>Ver artículos &gt;</p>
                </div>
                <div className='grid-container-item-pago'>
                <img src={cakeimg} alt='Pedido' className='order-img' />
                <img src={cakeimg2} alt='Pedido' className='order-img' />
                <p className='price-text'>$$$</p>
                <p className='price-text'>$$$</p>
                </div>
            </div>
            <div className='espacio-content'></div>
            <div className='order-content'>
                <p className='order-title1'>Selecciona tu fecha de entrega y hora</p>
                <p className='order-subtext'>Tu fecha de entrega debe estar entre dos días y cinco meses después de la fecha de compra.</p>
            </div>
        </div>
    );
}

export default ProcederPago;
