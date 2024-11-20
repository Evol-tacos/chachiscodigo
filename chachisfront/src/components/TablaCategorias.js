import React, { useState, useEffect } from "react";
import "./estilos/Tablas.css";
import Edit from "./icons/edit-icon.png";
import Trash from "./icons/trash-icon.png";
import { onDelete } from "../utils/api";

function TablaCategorias() {
    const [categorias, setCategorias] = useState([]);

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
        const result = await onDelete("categorias", id);
        if (result.success) {
            setCategorias((prevCategorias) =>
                prevCategorias.filter((categoria) => categoria.id_categoria !== id)
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
                                        className="button-TP"
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
            <button className="add-product-button">Añadir categoría</button>
        </div>
    );
}

export default TablaCategorias;
