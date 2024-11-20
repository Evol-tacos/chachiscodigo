import React, { useState } from "react";
import "./estilos/Tablas.css";

function TablaPedidos() {
  // Estados para gestionar los valores de cada dropdown
  const [pagos, setPagos] = useState({
    pedido1: "pendiente",
    pedido2: "realizado",
  });

  // Manejar el cambio de valor en los dropdowns de pago
  const handlePagoChange = (pedido, nuevoEstado) => {
    setPagos((prevPagos) => ({ ...prevPagos, [pedido]: nuevoEstado }));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Número de pedido</th>
            <th>Cliente</th>
            <th>Número de contacto</th>
            <th>Fecha de pedido</th>
            <th>Fecha de entrega</th>
            <th>Pago</th>
            <th>Estado del pedido</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#023</td>
            <td>Panchita</td>
            <td>66220117xx</td>
            <td>15/10/2024</td>
            <td>15/11/2024</td>
            <td>
              <select
                className={`dropdown pago ${pagos.pedido1}`}
                value={pagos.pedido1}
                onChange={(e) => handlePagoChange("pedido1", e.target.value)}
              >
                <option value="realizado">Realizado</option>
                <option value="pendiente">Pendiente</option>
              </select>
            </td>
            <td>
              <select className="dropdown estado">
                <option>En proceso</option>
                <option>Pendiente</option>
                <option>Completado</option>
              </select>
            </td>
            <td>ver detalles</td>
          </tr>
          <tr>
            <td>#024</td>
            <td>Fulanito</td>
            <td>66220117xx</td>
            <td>30/10/2024</td>
            <td>18/11/2024</td>
            <td>
              <select
                className={`dropdown pago ${pagos.pedido2}`}
                value={pagos.pedido2}
                onChange={(e) => handlePagoChange("pedido2", e.target.value)}
              >
                <option value="realizado">Realizado</option>
                <option value="pendiente">Pendiente</option>
              </select>
            </td>
            <td>
              <select className="dropdown estado">
                <option>Pendiente</option>
                <option>En proceso</option>
                <option>Completado</option>
              </select>
            </td>
            <td>ver detalles</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TablaPedidos;
