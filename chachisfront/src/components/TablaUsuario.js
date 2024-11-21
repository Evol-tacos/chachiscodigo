import React, { useState, useEffect } from 'react';
import './estilos/Tablas.css';
import Edit from "./icons/edit-icon.png";
import Trash from "./icons/trash-icon.png";
import { onDelete } from "../utils/api";

function TablaUsuario() {
    const [clientes, setClientes] = useState([]);
    const [mostrarEditar, setMostrarEditar] = useState(false); // Control de visibilidad del formulario para editar
    const [nuevoUsuario, setNuevoUsuario] = useState({ // Estado inicial del formulario
        id_cliente: "",
        nombre_completo: "",
        email: "",
        telefono: "",
        direccion: "",
        tipo: "",
    });
    const [ setError] = useState(null); // Para manejar errores


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
        const result = await onDelete("cliente", id);
        if (result.success) {
            setClientes((prevClientes) =>
                prevClientes.filter((cliente) => cliente.id_cliente !== id)
            );
        } else {
            console.error("Error al borrar:", result.error);
        }
    };

    const iniciarEdicion = (cliente) => {
        setMostrarEditar(true);
        setNuevoUsuario(cliente); // Llenar el formulario con los datos del usuario seleccionado
    };

    const handleEditClick = async () => {

        const tabla = 'cliente';
        const datos = nuevoUsuario;
        const id = nuevoUsuario.id_cliente;

        try {
            const response = await fetch("http://localhost:4000/api/actualizar", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    tabla,
                    datos,
                    id
                }),
            });

            if (!response.ok) {
                throw new Error('Error al actualizar usuario');
            }

            const usuarioActualizado = await response.json();

            // Asegúrate de que el id_cliente se mantenga
            const clienteConId = { ...usuarioActualizado, id_cliente: id };

            // Actualizar el estado con el cliente actualizado
            const clientesActualizados = clientes.map(cliente =>
                cliente.id_cliente === id ? { ...cliente, ...clienteConId } : cliente
            );

            setClientes(clientesActualizados);
            setMostrarEditar(false);
            setError(null); // Limpiar error si existía

            await refreshTable();
        } catch (error) {
            console.error("Error al actualizar usuario", error);
            setError("Hubo un problema al actualizar el usuario. Intenta de nuevo.");
        }
    };

    const refreshTable = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/usuarios');
            const data = await response.json();
            setClientes(data);
        } catch (error) {
            console.error("Error al refrescar la tabla", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevoUsuario({ ...nuevoUsuario, [name]: value });
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
                                        className="button-TP" onClick={() => iniciarEdicion(cliente)}
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
            {mostrarEditar && (

                <div className="formulario-linea">
                    <input
                        type="text"
                        name="nombre_completo"
                        placeholder="Nombre"
                        value={nuevoUsuario.nombre_completo}
                        onChange={handleInputChange}
                        className="input-form-linea"
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={nuevoUsuario.email}
                        onChange={handleInputChange}
                        className="input-form-linea"
                    />
                    <input
                        name="telefono"
                        placeholder="Telefono"
                        value={nuevoUsuario.telefono}
                        onChange={handleInputChange}
                        className="input-form-linea"
                    />
                    <input
                        type="text"
                        name="direccion"
                        placeholder="Dirección"
                        value={nuevoUsuario.direccion}
                        onChange={handleInputChange}
                        className="input-form-linea"
                    />
                    <input
                        type="enum"
                        name="tipo"
                        placeholder="Tipo"
                        value={nuevoUsuario.tipo}
                        onChange={handleInputChange}
                        className="input-form-linea"
                    />
                    <button className="guardar-button-TP" onClick={() => handleEditClick()}>
                        Guardar
                    </button>
                    <button
                        className="cancelar-button-TP"
                        onClick={() => {
                            setMostrarEditar(false);
                            setError(null);
                        }}
                    >
                        Cancelar
                    </button>
                </div>
            )}
        </div>
    );
}

export default TablaUsuario;
