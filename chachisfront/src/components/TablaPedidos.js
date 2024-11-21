import React, { useEffect, useState } from "react";
import "./estilos/Tablas.css";

function TablaPedidos() {
  // Estados para gestionar los valores de cada dropdown

  const [pedidos, setPedidos] = useState([]);
  const [ detalles, setDetalles ] = useState([]);
  const [pedidoSeleccionado, setPedidoSeleccionado] = useState(null);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/pedidos');
        const data = await response.json();
        console.log(data);
        setPedidos(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error al obtener los pedidos', error);
        setPedidos([]);
      }
    };
    fetchPedidos();
  }, []);

  const handleDetalles = async (id_pedido) => {
    try {
      const response = await fetch(`http://localhost:4000/api/detalles/${id_pedido}`);
      const data = await response.json();
      console.log(data);
      console.log("Pedido seleccionado:", id_pedido);
      console.log("Estado detalles:", detalles);
      setDetalles(Array.isArray(data) ? data : []);
      setPedidoSeleccionado(id_pedido);
    } catch (error) {
      console.error('Error al obtener los detalles', error);
      setDetalles([]);
      setPedidoSeleccionado(null);
    }
  };
  

  // Manejar el cambio de valor en los dropdowns de pago
  const handleCambio = async (id_pedido, campo, valor) => {
    setPedidos((prevPedidos) =>
      prevPedidos.map((pedido) =>
        pedido.id_pedido === id_pedido
          ? { ...pedido, [campo]: valor }
          : pedido
      )
    );

    // Actualizar el estado del pedido en la base de datos
    const datosActualizados = { [campo]: valor };

  try {
    const response = await fetch("http://localhost:4000/api/actualizar", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tabla: 'pedido',
        datos: datosActualizados,
        id: id_pedido
      }),
    });

    if (!response.ok) {
      throw new Error('Error al actualizar pedido');
    }
    const pedidoActualizadoDesdeServidor = await response.json();
    console.log("Pedido actualizado:", pedidoActualizadoDesdeServidor);

    // Actualizar el estado con el pedido actualizado desde el servidor
    setPedidos((prevPedidos) =>
      prevPedidos.map((pedido) =>
        pedido.id_pedido === id_pedido ? { ...pedido, ...pedidoActualizadoDesdeServidor } : pedido
      )
    );

  } catch (error) {
    console.error("Error al actualizar pedido", error);
  }
};

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Número de pedido</th>
            <th>Cliente</th>
            <th>Fecha de pedido</th>
            <th>Fecha de entrega</th>
            <th>Pago</th>
            <th>Estado del pedido</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido) => (
            <tr key={pedido.id_pedido}>
              <td>{pedido.id_pedido}</td>
              <td>{pedido.id_cliente}</td>
              <td>{pedido.fecha_pedido}</td>
              <td>{pedido.fecha_entrega}</td>
              <td>
                <select
                  className={`dropdown pago ${pedido.pago}`}
                  value={pedido.pago}
                  onChange={(e) => handleCambio(pedido.id_pedido, "pago", e.target.value)}
                >
                  <option value="realizado">Realizado</option>
                  <option value="pendiente">Pendiente</option>
                </select>
              </td>
              <td>
                <select className="dropdown estado" value={pedido.estado} 
                onChange={(e) => handleCambio(pedido.id_pedido, "estado", e.target.value)}>
                  <option value="en proceso">En proceso</option>
                  <option value="pendiente">Pendiente</option>
                  <option value="entregado">Entregado</option>
                  <option value="cancelado">Cancelado</option>
                </select>
              </td>
              <td className="detalle-text" onClick={() => handleDetalles(pedido.id_pedido)}>
                Ver detalles
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {pedidoSeleccionado && detalles.length > 0 && (
        <DetallesPedido detalles={detalles} pedidoSeleccionado={pedidoSeleccionado} />
      )}
    </div>
  );
}

function DetallesPedido({ detalles, pedidoSeleccionado }) {
  return (
    <div className="detalles-pedido">
      <h3>Detalles del Pedido {pedidoSeleccionado}</h3>
      <ul>
        {detalles.map((detalle, index) => (
          <li key={index}>
            <strong>Instrucciones:    </strong>{detalle.instrucciones}< br />
            <strong>Mensaje:   </strong>{detalle.mensaje}<br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TablaPedidos;
