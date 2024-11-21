import React, { useState, useEffect } from "react";
import "./estilos/Tablas.css";
import Edit from "./icons/edit-icon.png";
import Trash from "./icons/trash-icon.png";
import { onDelete } from "../utils/api";

function TablaCategorias() {
    const [categorias, setCategorias] = useState([]);
    const [mostrarFormulario, setMostrarFormulario] = useState(false); // Control de visibilidad del formulario
    const [mostrarEditar, setMostrarEditar] = useState(false); // Control de visibilidad del formulario para editar
    const [nuevaCategoria, setNuevaCategoria] = useState({ // Estado inicial del formulario
        nombre_categoria: "",
        descripcion: "",
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                const response = await fetch("http://localhost:4000/api/categorias");
                const data = await response.json();
                setCategorias(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error("Error al obtener las categorías", error);
                setCategorias([]);
            }
        };
        fetchCategorias();
    }, []);

    const handleDelete = async (id) => {
        const result = await onDelete("categoria", id);
        if (result.success) {
            setCategorias((prevCategorias) =>
                prevCategorias.filter((categoria) => categoria.id_categoria !== id)
            );
        } else {
            console.error("Error al borrar:", result.error);
        }
    };

    const iniciarEdicion = (categoria) => {
        setMostrarEditar(true);
        setNuevaCategoria(categoria); // Llenar el formulario con los datos de la categoria seleccionado
      };
    
      const handleEditClick = async () => {
    
        const tabla = 'categoria';
        const datos = nuevaCategoria;
        const id = nuevaCategoria.id_categoria;
    
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
            throw new Error('Error al actualizar categoria');
          }
    
          const categoriaActualizada = await response.json();
    
          // Asegúrate de que el id_categoria se mantenga
          const categoriaConId = { ...categoriaActualizada, id_categoria: id };
    
          // Actualizar el estado con la categoria actualizada
          const categoriasActualizadas = categorias.map(categoria =>
            categoria.id_categoria === id ? { ...categoria, ...categoriaConId } : categoria
          );
    
          setCategorias(categoriasActualizadas);
          setMostrarEditar(false);
          setError(null); // Limpiar error si existía
    
          await refreshTable();
        } catch (error) {
          console.error("Error al actualizar categoria", error);
          setError("Hubo un problema al actualizar la categoria. Intenta de nuevo.");
        }
      };
    
      // Refrescar la tabla
      const refreshTable = async () => {
        try {
          const response = await fetch("http://localhost:4000/api/categorias");
          const data = await response.json();
          setCategorias(data); 
        } catch (error) {
          console.error("Error al refrescar la tabla", error);
        }
      };
    
    // Manejar cambios en los inputs del formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevaCategoria({ ...nuevaCategoria, [name]: value });
    };

    const validarFormulario = () => {
        const { nombre_categoria, descripcion } = nuevaCategoria;
        if (!nombre_categoria || !descripcion) {
          alert("Por favor completa todos los campos obligatorios.");
          return " "; 
        }
        return null;
      };

    // Manejar la acción de agregar un producto
    const handleAgregarCategoria = async () => {
        const errorValidacion = validarFormulario();
        if (errorValidacion) {
            setError(errorValidacion);
            return;
        }

        const tabla = 'categoria';
        const datos = nuevaCategoria;

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
                throw new Error("Error al agregar categoria");
            }

            const categoriaAgregada = await response.json();

            // Actualizar el estado con la nueva Categoria
            setCategorias([...categorias, { ...nuevaCategoria, id_categoria: categoriaAgregada.id }]);

            // Resetear el formulario
            setNuevaCategoria({
                nombre_categoria: "",
                descripcion: "",
            });
            setMostrarFormulario(false);
            setError(null); // Limpiar error si existía
        } catch (error) {
            console.error("Error al agregar categoria", error);
            setError("Hubo un problema al agregar la categoria. Intenta de nuevo.");
        }
    };

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
                    {categorias.map((categoria) => (
                        <tr key={categoria.id_categoria}>
                            <td>{categoria.id_categoria}</td>
                            <td>{categoria.nombre_categoria}</td>
                            <td>{categoria.descripcion}</td>
                            <td>
                                <div className="left-space">
                                    <button
                                        className="button-TP" onClick={() => iniciarEdicion(categoria)}
                                    >
                                        <img src={Edit} alt="Editar" className="icon-s" />
                                    </button>
                                    <button
                                        className="button-TP"
                                        onClick={() => handleDelete(categoria.id_categoria)}
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
                        name="nombre_categoria"
                        placeholder="Nombre"
                        value={nuevaCategoria.nombre_categoria}
                        onChange={handleInputChange}
                        className="input-form-linea"
                    />
                    <input
                        name="descripcion"
                        placeholder="Descripción"
                        value={nuevaCategoria.descripcion}
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
                Añadir categoría
            </button>

            {/* Formulario en línea debajo de la tabla */}
            {mostrarFormulario && (
                <div className="formulario-linea">
                    <input
                        type="text"
                        name="nombre_categoria"
                        placeholder="Nombre"
                        value={nuevaCategoria.nombre_categoria}
                        onChange={handleInputChange}
                        className="input-form-linea"
                    />
                    <input
                        name="descripcion"
                        placeholder="Descripción"
                        value={nuevaCategoria.descripcion}
                        onChange={handleInputChange}
                        className="input-form-linea"
                    />
                    <button className="guardar-button-TP" onClick={handleAgregarCategoria}>
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

export default TablaCategorias;
