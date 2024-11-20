import React, { useState, useEffect } from 'react';
import './estilos/Tablas.css';
import Edit from './icons/edit-icon.png';
import Trash from './icons/trash-icon.png';
import {onDelete} from '../utils/api';

function TablaRellenos() {
    const [rellenos, setRellenos] = useState([]);

    useEffect(() => {
        const fetchRellenos = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/rellenos');
                const data = await response.json();
                console.log(data);
                setRellenos(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error('Error al obtener los rellenos', error);
                setRellenos([]);
            }
        }
        fetchRellenos();
    }, []);

    const handleDelete = async (id) => {
        const result = await onDelete("rellenos", id);
        if (result.success) {
            setRellenos((prevRellenos) =>
                prevRellenos.filter((relleno) => relleno.id_relleno !== id)
            );
        } else {
            console.error("Error al borrar:", result.error);
        }
    };

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
                    {rellenos.map((relleno) => (
                        <tr key={relleno.id_relleno}>
                            <td>{relleno.id_relleno}</td>
                            <td>{relleno.nombre_relleno}</td>
                            <td>{relleno.descripcion}</td>
                            <td>
                                <div className="left-space">
                                    <button
                                        className="button-TP"
                                    >
                                        <img src={Edit} alt="Editar" className="icon-s" />
                                    </button>
                                    <button
                                        className="button-TP"
                                        onClick={() => handleDelete(relleno.id_relleno)}
                                    >
                                        <img src={Trash} alt="Borrar" className="icon-s" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="add-product-button">Añadir rellenos</button>
        </div>
    );
}

export default TablaRellenos;
