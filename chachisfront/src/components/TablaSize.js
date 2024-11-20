import React,{ useState, useEffect } from "react";
import './estilos/Tablas.css';
import Edit from './icons/edit-icon.png';
import Trash from './icons/trash-icon.png';
import { onDelete } from '../utils/api';

function TablaSize() {
    const [size, setSize] = useState([]);

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
        const result = await onDelete("tamanos", id);
        if (result.success) {
            setSize((prevSize) =>
                prevSize.filter((size) => size.id_tamano !== id)
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
                                        className="button-TP"
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
            <button className="add-product-button">Añadir tamaño</button>
        </div>
    );
}

export default TablaSize;
