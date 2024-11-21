import React, { useState, useEffect } from "react";
import './estilos/Tablas.css';
import Edit from './icons/edit-icon.png';
import Trash from './icons/trash-icon.png';
import { onDelete } from '../utils/api';

function TablaSabores() {
    const [sabores, setSabores] = useState([]);
    const [mostrarFormulario, setMostrarFormulario] = useState(false); // Control de visibilidad del formulario
    const [mostrarEditar, setMostrarEditar] = useState(false); // Control de visibilidad del formulario para editar
    const [nuevoSabor, setNuevoSabor] = useState({ // Estado inicial del formulario
        nombre_sabor: "",
        descripcion: "",
    });
    const [error, setError] = useState(null);

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
        const result = await onDelete("sabor", id);
        if (result.success) {
            setSabores((prevSabores) =>
                prevSabores.filter((sabor) => sabor.id_sabor !== id)
            );
        } else {
            console.error("Error al borrar:", result.error);
        }
    };

    const iniciarEdicion = (sabor) => {
        setMostrarEditar(true);
        setNuevoSabor(sabor); // Llenar el formulario con los datos del producto seleccionado
      };
    
      const handleEditClick = async () => {
    
        const tabla = 'sabor';
        const datos = nuevoSabor;
        const id = nuevoSabor.id_sabor;
    
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
            throw new Error('Error al actualizar sabor');
          }
    
          const saborActualizado = await response.json();
    
          // Asegúrate de que el id_sabor se mantenga
          const saborConId = { ...saborActualizado, id_sabor: id };
    
          // Actualizar el estado con el sabor actualizado
          const saboresActualizados = sabores.map(sabor =>
            sabor.id_sabor === id ? { ...sabor, ...saborConId } : sabor
          );
    
          setSabores(saboresActualizados);
          setMostrarEditar(false);
          setError(null); // Limpiar error si existía
    
          await refreshTable();
        } catch (error) {
          console.error("Error al actualizar sabores", error);
          setError("Hubo un problema al actualizar el sabor. Intenta de nuevo.");
        }
      };
    
      const refreshTable = async () => {
        try {
          const response = await fetch("http://localhost:4000/api/sabores");
          const data = await response.json();
          setSabores(data);
        } catch (error) {
          console.error("Error al refrescar la tabla", error);
        }
      };

    // Manejar cambios en los inputs del formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevoSabor({ ...nuevoSabor, [name]: value });
    };

    const validarFormulario = () => {
        const { nombre_sabor, descripcion } = nuevoSabor;
        if (!nombre_sabor || !descripcion) {
          alert("Por favor completa todos los campos obligatorios.");
          return " "; 
        }
        return null;
      };

    // Manejar la acción de agregar un producto
    const handleAgregarSabor = async () => {
        const errorValidacion = validarFormulario();
        if (errorValidacion) {
            setError(errorValidacion);
            return;
        }

        const tabla = 'sabor';
        const datos = nuevoSabor;

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
                throw new Error("Error al agregar sabor");
            }

            const saborAgregado = await response.json();

            // Actualizar el estado con el nuevo sabor
            setSabores([...sabores, { ...nuevoSabor, id_sabor: saborAgregado.id }]);

            // Resetear el formulario
            setNuevoSabor({
                nombre_sabor: "",
                descripcion: "",
            });
            setMostrarFormulario(false);
            setError(null); // Limpiar error si existía
        } catch (error) {
            console.error("Error al agregar sabor", error);
            setError("Hubo un problema al agregar el sabor. Intenta de nuevo.");
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
                                        className="button-TP" onClick={() => iniciarEdicion(sabor)}
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

            {mostrarEditar && (
                <div className="formulario-linea">
                    <input
                        type="text"
                        name="nombre_sabor"
                        placeholder="Nombre"
                        value={nuevoSabor.nombre_sabor}
                        onChange={handleInputChange}
                        className="input-form-linea"
                    />
                    <input
                        name="descripcion"
                        placeholder="Descripción"
                        value={nuevoSabor.descripcion}
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
                Añadir sabor
            </button>

            {/* Formulario en línea debajo de la tabla */}
            {mostrarFormulario && (
                <div className="formulario-linea">
                    <input
                        type="text"
                        name="nombre_sabor"
                        placeholder="Nombre"
                        value={nuevoSabor.nombre_sabor}
                        onChange={handleInputChange}
                        className="input-form-linea"
                    />
                    <input
                        name="descripcion"
                        placeholder="Descripción"
                        value={nuevoSabor.descripcion}
                        onChange={handleInputChange}
                        className="input-form-linea"
                    />
                    <button className="guardar-button-TP" onClick={handleAgregarSabor}>
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

export default TablaSabores;
