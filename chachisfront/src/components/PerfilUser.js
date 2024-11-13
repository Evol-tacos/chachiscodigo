import React from 'react';
import './estilos/PerfilUser.css';


function Perfil() {
    return (
        <div className="page-container">
            <div className="page-content">
                <p className='page-title espacio'>Mi cuenta</p> 
                <form>
                    <p className="page-texto izquierda espacio">Nombre Completo</p>
                    <input className="izquierda size-text espacio" type="text" placeholder="Nombre Completo" required />
                    <p className="page-texto izquierda espacio">Correo Electrónico</p>
                    <input className="izquierda size-text espacio" type="email" placeholder="Correo Electrónico" required />
                    <p className='page-texto izquierda espacio'>Teléfono</p>
                    <input className="izquierda size-text espacio" type="tel" placeholder="Número de Teléfono" required />
                    <p className='page-texto izquierda espacio'>Dirección</p>
                    <input className="izquierda size-text espacio" type="text" placeholder="Dirección" required />
                    <p className='page-texto izquierda espacio'>Contraseña</p>
                    <input className="izquierda size-text espacio" type="password" placeholder="Contraseña" required />
                    <div className='izquierda'>
                    <button type="submit" className="confirmar-button">Confirmar</button>
                    </div>
                    <div className='separador'>
                    <button type="submit" className="logoff-button">Cerrar sesión</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Perfil;