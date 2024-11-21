import React, { useState } from 'react';
import './estilos/Pedidos.css';

function Pedidos() {
    const [categoria, setCategoria] = useState('');
    const [sabor, setSabor] = useState('');
    const [relleno, setRelleno] = useState('');
    const [tamaño, setTamaño] = useState('');
    const [imagen, setImagen] = useState(null);
    const [instrucciones, setInstrucciones] = useState('');
    const [mensaje, setMensaje] = useState('');

    const categorias = [
        { label: "Cumpleaños", value: 1 },
        { label: "Infantil", value: 2 },
        { label: "Boda", value: 3 },
        { label: "Personalizado", value: 4 }
    ];

    const sabores = [
        { label: "Chocolate", value: 1 },
        { label: "Vainilla", value: 2 },
        { label: "Fresa", value: 3 },
        { label: "Red velvet", value: 4 }
    ];

    const rellenos = [
        { label: "Fresas", value: 1 },
        { label: "Frutos rojos", value: 2 },
        { label: "Chocolate", value: 3 },
        { label: "Cajeta", value: 4 },
        { label: "Bavaria", value: 5 },
        { label: "Sin relleno", value: 6 }
    ];

    const tamaños = [
        { label: "Chico", value: 1 },
        { label: "Mediano", value: 2 },
        { label: "Grande", value: 3 }
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('categoria', categoria);
        formData.append('sabor', sabor);
        formData.append('relleno', relleno);
        formData.append('tamaño', tamaño);
        formData.append('imagen', imagen);
        formData.append('instrucciones', instrucciones);
        formData.append('mensaje', mensaje);

        try {
            const response = await fetch('http://localhost:4000/api/pedidosespecial', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Pedido enviado correctamente:', data);
            } else {
                console.error('Error al enviar el pedido:', data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="pedidos-container">
                <p className='pedidos-title'>REALIZAR PEDIDO</p>

                <div className="input-container space">
                    <p className='pedidos-texto'>1.- C A T E G O R Í A:</p>
                    <select id="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                        <option value="">Escoge la categoría</option>
                        {categorias.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>

                <div className="input-container space">
                    <p className='pedidos-texto'>2.- S A B O R:</p>
                    <select id="sabor" value={sabor} onChange={(e) => setSabor(e.target.value)}>
                        <option value="">Escoge el sabor</option>
                        {sabores.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>

                <div className="input-container space">
                    <p className='pedidos-texto'>3.- R E L L E N O:</p>
                    <select id="relleno" value={relleno} onChange={(e) => setRelleno(e.target.value)}>
                        <option value="">Escoge el relleno</option>
                        {rellenos.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>

                <div className="input-container space">
                    <p className='pedidos-texto'>4.- T A M A Ñ O:</p>
                    <select id="tamaño" value={tamaño} onChange={(e) => setTamaño(e.target.value)}>
                        <option value="">Escoge el tamaño</option>
                        {tamaños.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>

                <div className="input-container space">
                    <p className='pedidos-texto'>5.- I N S T R U C C I O N E S:</p>
                    <textarea
                        id="instrucciones"
                        value={instrucciones}
                        onChange={(e) => setInstrucciones(e.target.value)}
                        placeholder="Escribe las instrucciones especiales aquí"
                    />
                </div>

                <div className="input-container space">
                    <p className='pedidos-texto'>6.- M E N S A J E:</p>
                    <textarea
                        id="mensaje"
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                        placeholder="Escribe el mensaje aquí"
                    />
                </div>

                <div className="input-container space">
                    <p className='pedidos-texto'>7.- R E F E R E N C I A:</p>
                    <button type="button" className="upload-button" onClick={() => document.getElementById('fileInput').click()}>
                        Subir imagen de referencia
                    </button>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: 'none' }}
                        accept="image/*"
                        onChange={(e) => setImagen(e.target.files[0])}
                    />
                </div>

                <div className="input-container space">
                    <button className="pedidos-button">Agregar al carrito</button>
                </div>
            </div>
        </form>
    );
};

export default Pedidos;