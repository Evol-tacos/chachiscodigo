import React, { useEffect, useState } from "react";
import "./estilos/Tablas.css";

function TablaPedidos() {
  // Estados para gestionar los valores de cada dropdown

  const [pedidos, setPedidos] = useState([]);

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

  // Manejar el cambio de valor en los dropdowns de pago
  const handleCambio = (id_pedido, campo, valor) => {
    setPedidos((prevPedidos) =>
      prevPedidos.map((pedido) =>
        pedido.id_pedido === id_pedido
          ? { ...pedido, [campo]: valor }
          : pedido
      )
    );
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
              <td>Ver detalles</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaPedidos;
