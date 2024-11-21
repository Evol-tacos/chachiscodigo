import React,{ useState, useEffect } from "react";
import './estilos/Tablas.css';
import Edit from './icons/edit-icon.png';
import Trash from './icons/trash-icon.png';
import { onDelete } from '../utils/api';

function TablaSize() {
    const [size, setSize] = useState([]);
    const [mostrarFormulario, setMostrarFormulario] = useState(false); // Control de visibilidad del formulario
    const [mostrarEditar, setMostrarEditar] = useState(false); // Control de visibilidad del formulario para editar
    const [nuevoTamano, setNuevoTamano] = useState({ // Estado inicial del formulario
        nombre_tamano: "",
        descripcion: "",
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTamano = async () => {
            try {
                const response = await fetch("http://localhost:4000/api/tamanos");
                const data = await response.json();
                console.log(data);
                setSize(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error("Error al obtener los tamaños", error);
                setSize([]);
            }
        }
        fetchTamano();
    }, []);

    const handleDelete = async (id) => {
        const result = await onDelete("tamano", id);
        if (result.success) {
            setSize((prevSize) =>
                prevSize.filter((size) => size.id_tamano !== id)
            );
        } else {
            console.error("Error al borrar:", result.error);
        }
    };

    const iniciarEdicion = (tamano) => {
        setMostrarEditar(true);
        setNuevoTamano(tamano); // Llenar el formulario con los datos del tamano seleccionado
      };
    
      const handleEditClick = async () => {
    
        const tabla = 'tamano';
        const datos = nuevoTamano;
        const id = nuevoTamano.id_tamano;
    
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
            throw new Error('Error al actualizar tamaño');
          }
    
          const tamanoActualizado = await response.json();
    
          // Asegúrate de que el id_tamano se mantenga
          const tamanoConId = { ...tamanoActualizado, id_tamano: id };
    
          // Actualizar el estado con el tamano actualizado
          const tamanosActualizados = size.map(tamano =>
            tamano.id_tamano === id ? { ...tamano, ...tamanoConId } : tamano
          );
    
          setSize(tamanosActualizados);
          setMostrarEditar(false);
          setError(null); // Limpiar error si existía
    
          await refreshTable();
        } catch (error) {
          console.error("Error al actualizar tamaño", error);
          setError("Hubo un problema al actualizar el tamaño. Intenta de nuevo.");
        }
      };
    
      const refreshTable = async () => {
        try {
          const response = await fetch("http://localhost:4000/api/tamanos");
          const data = await response.json();
          setSize(data);
        } catch (error) {
          console.error("Error al refrescar la tabla", error);
        }
      };
    

    // Manejar cambios en los inputs del formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevoTamano({ ...nuevoTamano, [name]: value });
    };

    const validarFormulario = () => {
        const { nombre_tamano, descripcion } = nuevoTamano;
        if (!nombre_tamano || !descripcion) {
          alert("Por favor completa todos los campos obligatorios.");
          return " "; 
        }
        return null;
      };

    // Manejar la acción de agregar un producto
    const handleAgregarTamano = async () => {
        const errorValidacion = validarFormulario();
        if (errorValidacion) {
            setError(errorValidacion);
            return;
        }

        const tabla = 'tamano';
        const datos = nuevoTamano;

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
                throw new Error("Error al agregar tamaño");
            }

            const tamanoAgregado = await response.json();

            // Actualizar el estado con el nuevo Tamaño
            setSize([...size, { ...nuevoTamano, id_tamano: tamanoAgregado.id }]);

            // Resetear el formulario
            setNuevoTamano({
                nombre_tamano: "",
                descripcion: "",
            });
            setMostrarFormulario(false);
            setError(null); // Limpiar error si existía
        } catch (error) {
            console.error("Error al agregar tamaño", error);
            setError("Hubo un problema al agregar el tamaño. Intenta de nuevo.");
        }
    };

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
                   {size.map((tamano) => (
                    <tr key={tamano.id_tamano}>
                        <td>{tamano.id_tamano}</td>
                        <td>{tamano.nombre_tamano}</td>
                        <td>{tamano.descripcion}</td>
                        <td>
                                <div className="left-space">
                                    <button
                                        className="button-TP" onClick={() => iniciarEdicion(tamano)}
                                    >
                                        <img src={Edit} alt="Editar" className="icon-s" />
                                    </button>
                                    <button
                                        className="button-TP"
                                        onClick={() => handleDelete(tamano.id_tamano)}
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
                        name="nombre_tamano"
                        placeholder="Nombre"
                        value={nuevoTamano.nombre_tamano}
                        onChange={handleInputChange}
                        className="input-form-linea"
                    />
                    <input
                        name="descripcion"
                        placeholder="Descripción"
                        value={nuevoTamano.descripcion}
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
                Añadir Tamaño
            </button>

            {/* Formulario en línea debajo de la tabla */}
            {mostrarFormulario && (
                <div className="formulario-linea">
                    <input
                        type="text"
                        name="nombre_tamano"
                        placeholder="Nombre"
                        value={nuevoTamano.nombre_tamano}
                        onChange={handleInputChange}
                        className="input-form-linea"
                    />
                    <input
                        name="descripcion"
                        placeholder="Descripción"
                        value={nuevoTamano.descripcion}
                        onChange={handleInputChange}
                        className="input-form-linea"
                    />
                    <button className="guardar-button-TP" onClick={handleAgregarTamano}>
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

export default TablaSize;
