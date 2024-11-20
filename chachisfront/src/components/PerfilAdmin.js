import React, { useState } from 'react';
import './estilos/PerfilAdmin.css';
import AdminIcon from './icons/icono-user.png';
import CI from './icons/cake-piece-icon.png';
import TablaProductos from './TablaProductos.js'; 
import TablaCategorias from './TablaCategorias.js'; 
import TablaSabores from './TablaSabores.js'; 
import TablaRellenos from './TablaRellenos.js'; 
import TablaSize from './TablaSize.js'; 
import TablaUsuario from './TablaUsuario.js';
import TablaPedidos from './TablaPedidos.js';

function PerfilAdmin() {
    const [tablaActual, setTablaActual] = useState(null);

    const handleMostrarTabla = (tabla) => {
        setTablaActual(tabla);
    };

    return (
        <div className="page-container">
            <div className="page-content-adminM">
                <div className="admin-title-img">
                    <img src={AdminIcon} alt="Icono" className="admin-img" />
                    <p className="page-title-admin">Administrador</p>
                </div>

                <div className="admin-text-img">
                    <img src={CI} alt="Icono" className="admin-img-cake" />
                    <p
                        className="page-title-admin"
                        onClick={() => handleMostrarTabla('productos')}
                    >
                        Productos
                    </p>
                </div>

                <div className="admin-subtext-img">
                    <img src={CI} alt="Icono" className="admin-img-cake-sub" />
                    <p
                        className="page-texto-admin"
                        onClick={() => handleMostrarTabla('categorias')}
                    >
                        Categorías
                    </p>
                </div>

                <div className="admin-subtext-img">
                    <img src={CI} alt="Icono" className="admin-img-cake-sub" />
                    <p
                        className="page-texto-admin"
                        onClick={() => handleMostrarTabla('sabores')}
                    >
                        Sabores
                    </p>
                </div>

                <div className="admin-subtext-img">
                    <img src={CI} alt="Icono" className="admin-img-cake-sub" />
                    <p
                        className="page-texto-admin"
                        onClick={() => handleMostrarTabla('rellenos')}
                    >
                        Rellenos
                    </p>
                </div>

                <div className="admin-subtext-img">
                    <img src={CI} alt="Icono" className="admin-img-cake-sub" />
                    <p
                        className="page-texto-admin"
                        onClick={() => handleMostrarTabla('tamanos')}
                    >
                        Tamaños
                    </p>
                </div>
                <div className='admin-text-img'>
                <img src={CI} alt='Icono' className='admin-img-cake'/>
               <p className='page-title-admin'
               onClick={() => handleMostrarTabla('pedidos')}
               >Pedidos</p> 
                </div>
                <div className='admin-text-img'>
                <img src={CI} alt='Icono' className='admin-img-cake'/>
               <p className='page-title-admin'
               onClick={() => handleMostrarTabla('usuarios')}>Usuarios</p> 
                </div>
            </div>

            <div className="page-content-admin">
                {tablaActual === 'productos' && <TablaProductos />}
                {tablaActual === 'categorias' && <TablaCategorias />}
                {tablaActual === 'sabores' && <TablaSabores />}
                {tablaActual === 'rellenos' && <TablaRellenos />}
                {tablaActual === 'tamanos' && <TablaSize />}
                {tablaActual === 'usuarios' && <TablaUsuario />}
                {tablaActual === 'pedidos' && <TablaPedidos />}
            </div>
        </div>
    );
}

export default PerfilAdmin;
