import React, { useState } from 'react';
import './estilos/RegistroU.css';
import logo from './icons/logo-png.png';

function RegistroU({ isOpen, onClose, openLogin }) {
    const [nombrecompleto, setNombreCompleto] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [confirmarContrasena, setConfirmarContrasena] = useState('');

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (contrasena !== confirmarContrasena) {
            alert('Las contraseñas no coinciden');
            return;
        }
        try {
            const response = await fetch('http://localhost:4000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombrecompleto, email, telefono, direccion, contrasena }),
            });

            const data = await response.json();
            if (response.ok) {
                alert('Usuario registrado correctamente');
                // Redirigir o realizar alguna acción después del registro exitoso
            } else {
                // Manejar errores
                console.error(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                <button className="back-button" onClick={() => {
                    onClose(); // Cierra el modal de registro
                    openLogin(); // Abre el modal de login
                }}>
                    <img src={back} alt="Atrás" className='back-button'/>
                </button>
                <img src={logo} alt="Chachis Pastelería Logo" className="modal-logo-reg" />

                <p className='registrarse'>¡Regístrate en Chachis Pastelería!</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={nombrecompleto}
                        onChange={(e) => setNombreCompleto(e.target.value)}
                        placeholder="Nombre Completo"
                        required
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="tel"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        placeholder="Teléfono"
                        required
                    />
                    <input
                        type="text"
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                        placeholder="Dirección"
                        required
                    />
                    <input
                        type="password"
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                        placeholder="Contraseña"
                        required
                    />
                    <input
                        type="password"
                        value={confirmarContrasena}
                        onChange={(e) => setConfirmarContrasena(e.target.value)}
                        placeholder="Confirmar Contraseña"
                        required
                    />
                    <button type="submit" className="register-button">Registrarse</button>
                </form>
            </div>
        </div>
    );
}

export default RegistroU;