import React, { useEffect, useState } from "react";
import "./estilos/Tablas.css";
import Edit from "./icons/edit-icon.png";
import Trash from "./icons/trash-icon.png";
import { onDelete } from "../utils/api";

function TablaProductos() {
  const [productos, setProductos] = useState([]); // Lista de productos
  const [mostrarFormulario, setMostrarFormulario] = useState(false); // Control de visibilidad del formulario
  const [mostrarEditar, setMostrarEditar] = useState(false); // Control de visibilidad del formulario para editar
  const [nuevoProducto, setNuevoProducto] = useState({ // Estado inicial del formulario
    id_producto: "",
    nombre_producto: "",
    id_categoria: "",
    descripcion: "",
    precio: "",
    cantidad: "",
  });
  const [error, setError] = useState(null); // Para manejar errores

  // Cargar productos al cargar el componente
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/productos");
        const data = await response.json();
        setProductos(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error al obtener productos", error);
        setProductos([]);
      }
    };
    fetchProductos();
  }, []);

  const handleDelete = async (id) => {
    const result = await onDelete("producto", id);
    if (result.success) {
      setProductos((prevProductos) =>
        prevProductos.filter((producto) => producto.id_producto !== id)
      );
    } else {
      console.error("Error al borrar:", result.error);
    }
  };

  const iniciarEdicion = (producto) => {
    setMostrarEditar(true);
    setNuevoProducto(producto); // Llenar el formulario con los datos del producto seleccionado
  };

  const handleEditClick = async () => {

    const tabla = 'producto';
    const datos = nuevoProducto;
    const id = nuevoProducto.id_producto;

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
        throw new Error('Error al actualizar producto');
      }

      const productoActualizado = await response.json();

      // Asegúrate de que el id_producto se mantenga
      const productoConId = { ...productoActualizado, id_producto: id };

      // Actualizar el estado con el producto actualizado
      const productosActualizados = productos.map(producto =>
        producto.id_producto === id ? { ...producto, ...productoConId } : producto
      );

      setProductos(productosActualizados);
      setMostrarEditar(false);
      setError(null); // Limpiar error si existía

      await refreshTable();
    } catch (error) {
      console.error("Error al actualizar producto", error);
      setError("Hubo un problema al actualizar el producto. Intenta de nuevo.");
    }
  };

  const refreshTable = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/productos");
      const data = await response.json();
      setProductos(data);
    } catch (error) {
      console.error("Error al refrescar la tabla", error);
    }
  };

  // Manejar cambios en los inputs del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoProducto({ ...nuevoProducto, [name]: value });
  };

  // Validar datos antes de enviar
  const validarFormulario = () => {
    const { nombre_producto, id_categoria, precio, cantidad } = nuevoProducto;
    if (!nombre_producto || !id_categoria || !precio || !cantidad) {
      alert("Por favor completa todos los campos obligatorios.");
    }
    if (isNaN(precio) || isNaN(cantidad)) {
      alert("El precio y la cantidad deben ser números válidos.");
    }
    return null;
  };

  // Manejar la acción de agregar un producto
  const handleAgregarProducto = async () => {
    const errorValidacion = validarFormulario();
    if (errorValidacion) {
      setError(errorValidacion);
      return;
    }

    const tabla = 'producto';
    const datos = nuevoProducto;

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
        throw new Error("Error al agregar producto");
      }

      const productoAgregado = await response.json();

      // Actualizar el estado con el nuevo producto
      setProductos([...productos, { ...nuevoProducto, id_producto: productoAgregado.id }]);

      // Resetear el formulario
      setNuevoProducto({
        nombre_producto: "",
        id_categoria: "",
        descripcion: "",
        precio: "",
        cantidad: "",
      });
      setMostrarFormulario(false);
      setError(null); // Limpiar error si existía
    } catch (error) {
      console.error("Error al agregar producto", error);
      setError("Hubo un problema al agregar el producto. Intenta de nuevo.");
    }
  };

  return (
    <div>
      {/* Tabla de productos */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id_producto}>
              <td>{producto.id_producto}</td>
              <td>{producto.nombre_producto}</td>
              <td>{producto.id_categoria}</td>
              <td>{producto.descripcion}</td>
              <td>${producto.precio}</td>
              <td>
                <div className="left-space">
                  <button className="button-TP" onClick={() => iniciarEdicion(producto)}>
                    <img src={Edit} alt="Editar" className="icon-s" />
                  </button>
                  <button className="button-TP" onClick={() => handleDelete(producto.id_producto)}>
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
            name="nombre_producto"
            placeholder="Nombre"
            value={nuevoProducto.nombre_producto}
            onChange={handleInputChange}
            className="input-form-linea"
          />
          <input
            type="text"
            name="id_categoria"
            placeholder="Categoría"
            value={nuevoProducto.id_categoria}
            onChange={handleInputChange}
            className="input-form-linea"
          />
          <input
            name="descripcion"
            placeholder="Descripción"
            value={nuevoProducto.descripcion}
            onChange={handleInputChange}
            className="input-form-linea"
          />
          <input
            type="number"
            name="precio"
            placeholder="Precio"
            value={nuevoProducto.precio}
            onChange={handleInputChange}
            className="input-form-linea"
          />
          <input
            type="number"
            name="cantidad"
            placeholder="Cantidad"
            value={nuevoProducto.cantidad}
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
        Añadir producto
      </button>

      {/* Formulario en línea debajo de la tabla */}
      {mostrarFormulario && (
        <div className="formulario-linea">
          <input
            type="text"
            name="nombre_producto"
            placeholder="Nombre"
            value={nuevoProducto.nombre_producto}
            onChange={handleInputChange}
            className="input-form-linea"
          />
          <input
            type="text"
            name="id_categoria"
            placeholder="Categoría"
            value={nuevoProducto.id_categoria}
            onChange={handleInputChange}
            className="input-form-linea"
          />
          <input
            name="descripcion"
            placeholder="Descripción"
            value={nuevoProducto.descripcion}
            onChange={handleInputChange}
            className="input-form-linea"
          />
          <input
            type="number"
            name="precio"
            placeholder="Precio"
            value={nuevoProducto.precio}
            onChange={handleInputChange}
            className="input-form-linea"
          />
          <input
            type="number"
            name="cantidad"
            placeholder="Cantidad"
            value={nuevoProducto.cantidad}
            onChange={handleInputChange}
            className="input-form-linea"
          />
          <button className="guardar-button-TP" onClick={handleAgregarProducto}>
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

export default TablaProductos;
