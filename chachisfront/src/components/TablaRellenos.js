import React, { useState, useEffect } from 'react';
import './estilos/Tablas.css';
import Edit from './icons/edit-icon.png';
import Trash from './icons/trash-icon.png';
import {onDelete} from '../utils/api';

function TablaRellenos() {
    const [rellenos, setRellenos] = useState([]);
    const [mostrarFormulario, setMostrarFormulario] = useState(false); // Control de visibilidad del formulario
    const [mostrarEditar, setMostrarEditar] = useState(false); // Control de visibilidad del formulario para editar
    const [nuevoRelleno, setNuevoRelleno] = useState({ // Estado inicial del formulario
        nombre_relleno: "",
        descripcion: "",
    });
    const [error, setError] = useState(null);

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
        const result = await onDelete("relleno", id);
        if (result.success) {
            setRellenos((prevRellenos) =>
                prevRellenos.filter((relleno) => relleno.id_relleno !== id)
            );
        } else {
            console.error("Error al borrar:", result.error);
        }
    };

    const iniciarEdicion = (relleno) => {
        setMostrarEditar(true);
        setNuevoRelleno(relleno); // Llenar el formulario con los datos del relleno seleccionado
      };
    
      const handleEditClick = async () => {
    
        const tabla = 'relleno';
        const datos = nuevoRelleno;
        const id = nuevoRelleno.id_producto;
    
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
            throw new Error('Error al actualizar relleno');
          }
    
          const rellenoActualizado = await response.json();
    
          // Asegúrate de que el id_relleno se mantenga
          const rellenoConId = { ...rellenoActualizado, id_relleno: id };
    
          // Actualizar el estado con el relleno actualizado
          const rellenosActualizados = rellenos.map(relleno =>
            relleno.id_relleno === id ? { ...relleno, ...rellenoConId } : relleno
          );
    
          setRellenos(rellenosActualizados);
          setMostrarEditar(false);
          setError(null); // Limpiar error si existía
    
          await refreshTable();
        } catch (error) {
          console.error("Error al actualizar relleno", error);
          setError("Hubo un problema al actualizar el relleno. Intenta de nuevo.");
        }
      };
    
      const refreshTable = async () => {
        try {
          const response = await fetch('http://localhost:4000/api/rellenos');
          const data = await response.json();
          setRellenos(data);
        } catch (error) {
          console.error("Error al refrescar la tabla", error);
        }
      };

    // Manejar cambios en los inputs del formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevoRelleno({ ...nuevoRelleno, [name]: value });
    };

    const validarFormulario = () => {
        const { nombre_relleno, descripcion } = nuevoRelleno;
        if (!nombre_relleno || !descripcion) {
          alert("Por favor completa todos los campos obligatorios.");
          return " "; 
        }
        return null;
      };

    // Manejar la acción de agregar un producto
    const handleAgregarRelleno = async () => {
        const errorValidacion = validarFormulario();
        if (errorValidacion) {
            setError(errorValidacion);
            return;
        }

        const tabla = 'relleno';
        const datos = nuevoRelleno;

        try {
            const response = await fetch("http://localhost:4000/api/agregar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    tabla,
                    datos,
                }),
            });


            if (!response.ok) {
                throw new Error("Error al agregar relleno");
            }

            const rellenoAgregado = await response.json();

            // Actualizar el estado con el nuevo Relleno
            setRellenos([...rellenos, { ...nuevoRelleno, id_relleno: rellenoAgregado.id }]);

            // Resetear el formulario
            setNuevoRelleno({
                nombre_relleno: "",
                descripcion: "",
            });
            setMostrarFormulario(false);
            setError(null); // Limpiar error si existía
        } catch (error) {
            console.error("Error al agregar relleno", error);
            setError("Hubo un problema al agregar el relleno. Intenta de nuevo.");
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
                                        className="button-TP" onClick={() => iniciarEdicion(relleno)}
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

            {mostrarEditar && (
                <div className="formulario-linea">
                    <input
                        type="text"
                        name="nombre_relleno"
                        placeholder="Nombre"
                        value={nuevoRelleno.nombre_relleno}
                        onChange={handleInputChange}
                        className="input-form-linea"
                    />
                    <input
                        name="descripcion"
                        placeholder="Descripción"
                        value={nuevoRelleno.descripcion}
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

            {/* Botón para mostrar el formulario */}
            <button
                className="add-product-button"
                onClick={() => setMostrarFormulario(!mostrarFormulario)}
            >
                Añadir relleno
            </button>

            {/* Formulario en línea debajo de la tabla */}
            {mostrarFormulario && (
                <div className="formulario-linea">
                    <input
                        type="text"
                        name="nombre_relleno"
                        placeholder="Nombre"
                        value={nuevoRelleno.nombre_relleno}
                        onChange={handleInputChange}
                        className="input-form-linea"
                    />
                    <input
                        name="descripcion"
                        placeholder="Descripción"
                        value={nuevoRelleno.descripcion}
                        onChange={handleInputChange}
                        className="input-form-linea"
                    />
                    <button className="guardar-button-TP" onClick={handleAgregarRelleno}>
                        Guardar
                    </button>
                    <button
                        className="cancelar-button-TP"
                        onClick={() => {
                            setMostrarFormulario(false);
                            setError(null);
                        }}
                    >
                        Cancelar
                    </button>
                </div>
            )}

            {/* Mensaje de error */}
            {error && <p className="error-message">{error}</p>}
        </div>
    );
}

export default TablaRellenos;
