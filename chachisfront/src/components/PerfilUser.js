import React from 'react';
import './estilos/PerfilUser.css';
import edit from './icons/edit-icon.png'
import add from './icons/add-icon.png'
import pendiente from './icons/pay-icon.png'
import process from './icons/process-icon.png'
import cake from './icons/cake-icon.png'
import { Link } from 'react-router-dom';

function Perfil() {
    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Esto asegura que las cookies se envíen con la solicitud
            });

            if (response.ok) {
                // Redirigir al usuario a la página de inicio de sesión o a la página principal
                window.location.href = '/login';
            } else {
                console.error('Error al cerrar sesión');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="page-container">
            <div className="page-content-form">
                <p className='page-title espacio'>Mi cuenta</p> 
                <form>
                <p className='page-texto izquierdo'>Nombre completo</p>
                    <div className="input-group">
                        <input className="input-edit izquierdo" type="text" placeholder="Nombre Completo" required />
                        <button type='button' className='edit-button'>
                            <img src={edit} alt='Editar' className='edit-icon' />
                        </button>
                    </div>
                    <p className='page-texto izquierdo'>Correo Electrónico</p>
                    <div className="input-group">
                        <input className="input-edit" type="email" placeholder="Correo Electrónico" required />
                        <button type='button' className='edit-button'>
                            <img src={edit} alt='Editar' className='edit-icon' />
                        </button>
                    </div>
                    <p className='page-texto izquierdo'>Teléfono</p>
                    <div className="input-group">
                        <input className="input-edit" type="tel" placeholder="Teléfono" required />
                        <button type='button' className='edit-button'>
                            <img src={edit} alt='Editar' className='edit-icon' />
                        </button>
                    </div>
                    <p className='page-texto izquierdo'>Dirección</p>
                    <div className="input-group">
                        <input className="input-edit" type="text" placeholder="Dirección" required />
                        <button type='button' className='edit-button'>
                            <img src={edit} alt='Editar' className='edit-icon' />
                        </button>
                    </div>
                    <p className='page-texto izquierdo'>Contraseña</p>
                    <div className="input-group">
                        <input className="input-edit" type="password" placeholder="Contraseña" required />
                        <button type='button' className='edit-button'>
                            <img src={edit} alt='Editar' className='edit-icon' />
                        </button>
                    </div>
                    <div className='button-container'>
                        <button type="submit" className="confirmar-button">Confirmar</button>
                        <button type="button" className="logoff-button" onClick={handleLogout}>Cerrar sesión</button>
                    </div>
                </form>
            </div>
            <div className="page-content-pedido">
                <p className='page-title espacio'>Mis pedidos</p>
                <div className="grid-container-perfil">
                    <div className="grid-item-perfil">
                    <Link to="/pedidos">
                    <img src={add} alt="Nuevo pedido"/>
                    </Link>
                    <p>Realizar pedido</p>
                    </div>
                    <div className="grid-item-perfil">
                    <Link to="/pedidos">
                    <img src={pendiente} alt="Pagos"/>
                    </Link>
                    <p>Pendiente de pago</p>
                    </div>
                    <div className="grid-item-perfil">
                    <Link to="/pedidos">
                    <img src={process} alt="En proceso"/>
                    </Link>
                    <p>En proceso</p>
                    </div>
                    <div className="grid-item-perfil">
                    <Link to="/pedidos">
                    <img src={cake} alt="Completado"/>
                    </Link>
                    <p>Completado</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Perfil;