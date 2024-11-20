import React from 'react';
import './estilos/Tablas.css';
import Edit from './icons/edit-icon.png';
import Trash from './icons/trash-icon.png';

function TablaRellenos() {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Rellenos</th>
                        <th>Descripción</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Fresas</td>
                        <td>Relleno apto para todo tipo de pastel</td>
                        <td>
                            <div className='left-space'>
                            <button className='button-TP'>
                                <img src={Edit} alt="Editar" className='icon-s' />
                            </button>
                            <button className='button-TP'>
                              <img src={Trash} alt="Borrar" className='icon-s' />  
                            </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Frutos rojos</td>
                        <td>Relleno diseñado para pasteles de cumpleaños</td>
                        <td>
                            <div className='left-space'>
                            <button className='button-TP'>
                                <img src={Edit} alt="Editar" className='icon-s' />
                            </button>
                            <button className='button-TP'>
                              <img src={Trash} alt="Borrar" className='icon-s' />  
                            </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Chocolate</td>
                        <td>Relleno apto para todo tipo de pastel</td>
                        <td>
                            <div className='left-space'>
                            <button className='button-TP'>
                                <img src={Edit} alt="Editar" className='icon-s' />
                            </button>
                            <button className='button-TP'>
                              <img src={Trash} alt="Borrar" className='icon-s' />  
                            </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Cajeta</td>
                        <td>Relleno apto para todo tipo de pastel</td>
                        <td>
                            <div className='left-space'>
                            <button className='button-TP'>
                                <img src={Edit} alt="Editar" className='icon-s' />
                            </button>
                            <button className='button-TP'>
                              <img src={Trash} alt="Borrar" className='icon-s' />  
                            </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Bavaria</td>
                        <td>Relleno diseñado para pasteles de cumpleaños, bodas e infantiles</td>
                        <td>
                            <div className='left-space'>
                            <button className='button-TP'>
                                <img src={Edit} alt="Editar" className='icon-s' />
                            </button>
                            <button className='button-TP'>
                              <img src={Trash} alt="Borrar" className='icon-s' />  
                            </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Sin relleno</td>
                        <td>Opción disponible para los clientes</td>
                        <td>
                            <div className='left-space'>
                            <button className='button-TP'>
                                <img src={Edit} alt="Editar" className='icon-s' />
                            </button>
                            <button className='button-TP'>
                              <img src={Trash} alt="Borrar" className='icon-s' />  
                            </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button className="add-product-button">Añadir rellenos</button>
        </div>
    );
}

export default TablaRellenos;
