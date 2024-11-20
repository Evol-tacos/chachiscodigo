import React, { useContext, useEffect } from 'react';
import { AuthContext } from './AuthContext.js';
import './estilos/PerfilUser.css';
import edit from './icons/edit-icon.png';
import { Link } from 'react-router-dom';
import add from './icons/add-icon.png'
import pendiente from './icons/pay-icon.png'
import process from './icons/process-icon.png'
import cake from './icons/cake-icon.png'


function Perfil() {
    const { handleLogout, user } = useContext(AuthContext);
    useEffect(() => {
        if (!user) {
            // Redirigir al usuario a la página principal si no está autenticado
            window.location.href = '/';
        }
    }, [user]);

    if (!user) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="page-container">
            <div className="page-content-form">
                <p className='page-title espacio'>Mi cuenta</p> 
                <form>
                    <p className='page-texto izquierdo'>Nombre completo</p>
                    <div className="input-group">

                        <input className="input-edit izquierdo" type="text" placeholder="Nombre Completo" value={user.nombrecompleto} readOnly />
                        <button type='button' className='edit-button'>
                            <img src={edit} alt='Editar' className='edit-icon' />
                        </button>
                    </div>
                    <p className='page-texto izquierdo'>Correo Electrónico</p>
                    <div className="input-group">

                        <input className="input-edit" type="email" placeholder="Correo Electrónico" value={user.email} readOnly />
                        <button type='button' className='edit-button'>
                            <img src={edit} alt='Editar' className='edit-icon' />
                        </button>
                    </div>
                    <p className='page-texto izquierdo'>Teléfono</p>
                    <div className="input-group">
                        <input className="input-edit" type="tel" placeholder="Teléfono" value={user.telefono} readOnly />
                        <button type='button' className='edit-button'>
                            <img src={edit} alt='Editar' className='edit-icon' />
                        </button>
                    </div>
                    <p className='page-texto izquierdo'>Dirección</p>
                    <div className="input-group">
                        <input className="input-edit" type="text" placeholder="Dirección" value={user.direccion} readOnly />
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