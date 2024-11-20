import React from 'react';
import './estilos/Tablas.css';

function TablaUsuario() {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Teléfono</th>
                        <th>Dirección</th>
                        <th>Contraseña</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>574386</td>
                        <td>Panchita</td>
                        <td>Gómez</td>
                        <td>panchisg@hotmail.com</td>
                        <td>66220117xx</td>
                        <td>Balderrama #57, Col. 5 de Mayo</td>
                        <td>********</td>
                    </tr>
                    <tr>
                        <td>589387</td>
                        <td>Maria</td>
                        <td>Juarez</td>
                        <td>mjuarez6@hotmail.com</td>
                        <td>66220117xx</td>
                        <td>123 #57, Col. 5 de Mayo</td>
                        <td>********</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TablaUsuario;
