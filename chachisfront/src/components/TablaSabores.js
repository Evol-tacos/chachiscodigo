import React, { useState, useEffect } from "react";
import './estilos/Tablas.css';
import Edit from './icons/edit-icon.png';
import Trash from './icons/trash-icon.png';
import { onDelete } from '../utils/api';

function TablaSabores() {
    const [sabores, setSabores] = useState([]);
    useEffect(() => {

        const fetchSabores = async () => {
            try {
                const response = await fetch("http://localhost:4000/api/sabores");
                const data = await response.json();
                console.log(data);
                setSabores(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error("Error al obtener los sabores", error);
                setSabores([]);
            }
        };
        fetchSabores();
    }, []);

    const handleDelete = async (id) => {
        const result = await onDelete("sabores", id);
        if (result.success) {
            setSabores((prevSabores) =>
                prevSabores.filter((sabor) => sabor.id_sabor !== id)
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
                        <th>Sabor</th>
                        <th>Descripción</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {sabores.map((sabor) => (
                        <tr key={sabor.id_sabor}>
                            <td>{sabor.id_sabor}</td>
                            <td>{sabor.nombre_sabor}</td>
                            <td>{sabor.descripcion}</td>
                            <td>
                                <div className="left-space">
                                    <button
                                        className="button-TP"
                                    >
                                        <img src={Edit} alt="Editar" className="icon-s" />
                                    </button>
                                    <button
                                        className="button-TP"
                                        onClick={() => handleDelete(sabor.id_sabor)}
                                    >
                                        <img src={Trash} alt="Borrar" className="icon-s" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="add-product-button">Añadir sabor</button>
        </div>
    );
}

export default TablaSabores;
