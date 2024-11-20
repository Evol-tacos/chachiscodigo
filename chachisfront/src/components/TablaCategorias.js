import React from 'react';
import './estilos/Tablas.css';
import Edit from './icons/edit-icon.png';
import Trash from './icons/trash-icon.png';

function TablaCategorias() {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Categoría</th>
                        <th>Descripción</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Infantil</td>
                        <td>Pasteles diseñados para las celebraciones de los más pequeños</td>
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
                        <td>Boda</td>
                        <td>Pasteles diseñados para las nuevas parejas</td>
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
                        <td>Cumpleaños</td>
                        <td>Pasteles diseñados para celebraciones de todas las edades</td>
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
                        <td>Personalizado</td>
                        <td>Pasteles para cualquier tipo de ocasión</td>
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
            <button className="add-product-button">Añadir categoría</button>
        </div>
    );
}

export default TablaCategorias;
