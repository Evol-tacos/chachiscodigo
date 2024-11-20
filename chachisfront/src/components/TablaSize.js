import React from 'react';
import './estilos/Tablas.css';
import Edit from './icons/edit-icon.png';
import Trash from './icons/trash-icon.png';

function TablaSize() {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tamaño</th>
                        <th>Descripción</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Chico</td>
                        <td>Pastel diseñado de 8 a 10 rebanadas</td>
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
                        <td>Mediano</td>
                        <td>Pastel diseñado de 12 a 16 rebanadas</td>
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
                        <td>Grande</td>
                        <td>Pasteles diseñado de 16 o más rebanadas</td>
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
            <button className="add-product-button">Añadir tamaño</button>
        </div>
    );
}

export default TablaSize;
