import React, { useState } from "react";
import "./estilos/Tablas.css";
import C1 from "./cakes/bday/bday-cake1.png";
import Edit from "./icons/edit-icon.png";
import Trash from "./icons/trash-icon.png";

function TablaProductos() {
  const [productos, setProductos] = useState([
    {
      id: 1,
      imagen: C1,
      nombre: "Pastel morado",
      categoria: "Cumpleaños",
      descripcion: "Hecho para compartir en familia con el amor de mamá",
      precio: 669,
    },
  ]);

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [nuevoProducto, setNuevoProducto] = useState({
    id: productos.length + 1,
    imagen: "",
    nombre: "",
    categoria: "",
    descripcion: "",
    precio: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoProducto({ ...nuevoProducto, [name]: value });
  };

  const handleAgregarProducto = () => {
    setProductos([...productos, nuevoProducto]);
    setNuevoProducto({
      id: productos.length + 2,
      imagen: "",
      nombre: "",
      categoria: "",
      descripcion: "",
      precio: "",
    });
    setMostrarFormulario(false);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>
                <img src={producto.imagen} alt={producto.nombre} className="img-s" />
              </td>
              <td>{producto.nombre}</td>
              <td>{producto.categoria}</td>
              <td>{producto.descripcion}</td>
              <td>${producto.precio}</td>
              <td>
                <div className="left-space">
                  <button className="button-TP">
                    <img src={Edit} alt="Editar" className="icon-s" />
                  </button>
                  <button className="button-TP">
                    <img src={Trash} alt="Borrar" className="icon-s" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Botón para mostrar el formulario */}
      <button
        className="add-product-button"
        onClick={() => setMostrarFormulario(!mostrarFormulario)}
      >
        Añadir producto
      </button>

      {/* Formulario en línea debajo de la tabla */}
      {mostrarFormulario && (
        <div className="formulario-linea">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={nuevoProducto.nombre}
            onChange={handleInputChange}
            className="input-form-linea"
          />
          <input
            type="text"
            name="categoria"
            placeholder="Categoría"
            value={nuevoProducto.categoria}
            onChange={handleInputChange}
            className="input-form-linea"
          />
          <input
            name="descripcion"
            placeholder="Descripción"
            value={nuevoProducto.descripcion}
            onChange={handleInputChange}
            className="input-form-linea"
          ></input>
          <input
            type="number"
            name="precio"
            placeholder="Precio"
            value={nuevoProducto.precio}
            onChange={handleInputChange}
            className="input-form-linea"
          />
          <button className="guardar-button-TP" onClick={handleAgregarProducto}>
            Guardar
          </button>
          <button
            className="cancelar-button-TP"
            onClick={() => setMostrarFormulario(false)}
          >
            Cancelar
          </button>
        </div>
      )}
    </div>
  );
}

export default TablaProductos;