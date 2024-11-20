import React, { useState, useEffect } from 'react';
import './estilos/Tablas.css';
import Edit from "./icons/edit-icon.png";
import Trash from "./icons/trash-icon.png";
import { onDelete } from "../utils/api";

function TablaUsuario() {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/usuarios');
                const data = await response.json();
                console.log(data);
                setClientes(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error('Error al obtener los clientes', error);
                setClientes([]);
            }
        };
        fetchClientes();
    }, []);

    const handleDelete = async (id) => {
        const result = await onDelete("clientes", id);
        if (result.success) {
            setClientes((prevClientes) =>
                prevClientes.filter((cliente) => cliente.id_cliente !== id)
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
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Teléfono</th>
                        <th>Dirección</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((cliente) => (
                        <tr key={cliente.id_cliente}>
                            <td>{cliente.id_cliente}</td>
                            <td>{cliente.nombre_completo}</td>
                            <td>{cliente.email}</td>
                            <td>{cliente.telefono}</td>
                            <td>{cliente.direccion}</td>
                            <td>{cliente.tipo}</td>
                            <td>
                                <div className="left-space">
                                    <button
                                        className="button-TP"
                                    >
                                        <img src={Edit} alt="Editar" className="icon-s" />
                                    </button>
                                    <button
                                        className="button-TP"
                                        onClick={() => handleDelete(cliente.id_cliente)}
                                    >
                                        <img src={Trash} alt="Borrar" className="icon-s" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TablaUsuario;
