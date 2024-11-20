import React, {useState} from 'react';
import './estilos/addCarrito.css';
import exit from './icons/exit-dark-icon.png';
import cakeimg from './cakes/bday/bday-cake1.png';

function AddCarrito({ onClose }) {
    const [sabor, setSabor] = useState(''); 
    const [relleno, setRelleno] = useState(''); 
    const [tamaño, setTamaño] = useState(''); 

    const sabores = [
        {label: "Chocolate", value: 1},
        {label: "Vainilla", value: 2},
        {label: "Fresa", value: 3},
        {label: "Red velvet", value: 4}
    ]

    const rellenos = [
        {label: "Fresas", value: 1},
        {label: "Frutos rojos", value: 2},
        {label: "Chocolate", value: 3},
        {label: "Cajeta", value: 4},
        {label: "Bavaria", value: 5},
        {label: "Sin relleno", value: 6}
    ]

    const tamaños = [
        {label: "Chico", value: 1},
        {label: "Mediano", value: 2},
        {label: "Grande", value: 3}
    ]

    return (
        <div className="addcarrito-popup">
            <button className="close-button-addCart" onClick={onClose}>
                <img src={exit} alt="Cerrar" className="close-icon-addCart" />
            </button>
            <div class="cake-img-container">
            <img src={cakeimg} alt="Producto" className="cake-img-AC" />
            </div>
            <div class="AC-title-price">
                <h2 class="AC-title">Pastel de Cumpleaños</h2>
                <p class="AC-price">$689</p>
            </div>

            <p className="AC-description">
                Pastel hecho con el amor de mamá decorado para ocasiones especiales.
            </p>
            <div className="select-group">
                <label className="select-label">Tamaño</label>
                <select className="input-pedido-AC" id="tamaño" value={tamaño} onChange={(e) => setTamaño(e.target.value)}> 
                <option value="">Escoge el tamaño</option> 
                {tamaños.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
                ))} 
                </select>
               <div className='closer'></div> 
            <label className="select-label">Sabor</label>
                <select className='input-pedido-AC' id="sabor" value={sabor} onChange={(e) => setSabor(e.target.value)}> 
                <option value="">Escoge el sabor</option> 
                {sabores.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
                ))} 
                </select>
                <div className='closer'></div> 
                <label className="select-label">Relleno</label>
                <select className='input-pedido-AC' id="relleno" value={relleno} onChange={(e) => setRelleno(e.target.value)}> 
                <option value="">Escoge el relleno</option> 
                    {rellenos.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
                ))} 
                </select>
                <div className='closer'></div> 
                <label className="select-label">Mensaje</label>
                <input type="text" className="input-pedido-AC" placeholder="Escribe un mensaje" />
            </div>
            <button className="pagar-button-AC" onClick={onClose}>Agregar al carrito</button>
        </div>
    );
}

export default AddCarrito;
