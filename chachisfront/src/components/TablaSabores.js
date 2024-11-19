import React from 'react';
import './estilos/Tablas.css';
import Edit from './icons/edit-icon.png';
import Trash from './icons/trash-icon.png';

function TablaSabores() {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Sabor</th>
                        <th>Descripción</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Fresa</td>
                        <td>Bizcocho sabor fresa, sólo para pasteles prediseñados, no personalizados</td>
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
                        <td>Chocolate</td>
                        <td>Bizcocho sabor chocolate, para todo tipo de pastel</td>
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
                        <td>Vainilla</td>
                        <td>Bizcocho sabor vainilla, para todo tipo de pastel</td>
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
                        <td>Red Velvet</td>
                        <td>Bizcocho sabor red velvet, para todo tipo de pastel</td>
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
            <button className="add-product-button">Añadir sabor</button>
        </div>
    );
}

export default TablaSabores;
