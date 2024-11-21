import React, { useState } from "react";
import "./estilos/ChatBot.css";
import chaticon from "./icons/chatbot-icon.png";
import closeIcon from "./icons/exit-icon.png";

function ChatBotPopUp({ onClose }) {
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [numeroPedido, setNumeroPedido] = useState("");
    const [informacionPedido, setInformacionPedido] = useState(null);

    // Objeto con las respuestas para cada pregunta
    const respuestas = {
        contacto: `Puedes contactarnos a través de: 
        - 📞 Teléfono: 6627849240 
        - 📧 Instagram: chahispasteleria
        -📍 Dirección: Calle Ejido #43 Colonia Pedregal de la Villa.`,
        horario:
            "- Nuestro horario de atención es: 📅 Lunes a Sábados: 9:00 AM - 5:00 PM 📅 Domingos: 10:00 AM - 2:00 PM",
        pago: "Por el momento solo contamos con pago por transferencia, la información se te proporcionará una vez que vayas a realizar el pago de tu pedido.",
        producto:
            "⭐ Nuestro producto más vendido es el pastel de chocolate con fresas. ¡Es el favorito de nuestros clientes! 🍫🍰",
        pedido: "🔍 Por favor, ingresa tu número de pedido para consultar su estado.",
    };

    // Función para manejar el clic en los botones
    const handleQuestionClick = (questionKey) => {
        setSelectedQuestion(questionKey);
    };

    const handleInputChange = (e) => {
        setNumeroPedido(e.target.value);
    };

    const handlePedidoConsulta = async () => {
        if (numeroPedido.trim() === "") {
            alert("Por favor, ingresa un número de pedido válido.");
            return;
        }
        try {
            const response = await fetch(
                `http://localhost:4000/api/pedidos/${numeroPedido}`
            );
            const data = await response.json();
            setInformacionPedido(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Error al obtener la información del pedido", error);
            setInformacionPedido(null);
        }
    };

    // Función para volver a las preguntas
    const handleBack = () => {
        setSelectedQuestion(null);
        setInformacionPedido(null);
    };

    return (
        <div className="chatbot-popup">
            <div className="chatbot-header">
                <div className="header-content">
                    <img className="chat-icon" src={chaticon} alt="ChatBot Icon" />
                    <p className="main-text-chat">Asistente</p>
                </div>
                <button className="close-button-chat" onClick={onClose}>
                    <img src={closeIcon} alt="Close" className="close-icon-chat" />
                </button>
            </div>
            <div className="chatbot-content">
                <p className="contenedor-mensaje">
                    ¡Hola!, soy tu asistente de compras, ¿Cómo puedo ayudarte hoy?
                </p>

                {!selectedQuestion ? (
                    // Mostrar botones de preguntas
                    <>
                        <button onClick={() => handleQuestionClick("contacto")}>
                            ¿Cuál es la información de contacto de Chachis Pastelería?
                        </button>
                        <button onClick={() => handleQuestionClick("horario")}>
                            ¿Cuál es el horario de Chachis Pastelería?
                        </button>
                        <button onClick={() => handleQuestionClick("pago")}>
                            ¿Cuáles son las formas de pago que se manejan en Chachis Pastelería?
                        </button>
                        <button onClick={() => handleQuestionClick("producto")}>
                            ¿Cuál es su producto más vendido?
                        </button>
                        <button onClick={() => handleQuestionClick("pedido")}>
                            ¿Cuál es el estado de mi pedido?
                        </button>
                    </>
                ) : selectedQuestion === "pedido" ? (
                    // Mostrar la sección de estado del pedido
                    <div className="respuesta-container">
                        <p className="contenedor-mensaje">{respuestas.pedido}</p>
                        <input
                            type="number"
                            placeholder="Ingrese su número de pedido"
                            value={numeroPedido}
                            onChange={handleInputChange}
                        />
                        <button onClick={handlePedidoConsulta}>Consultar pedido</button>
                        {informacionPedido && (
                            <div className="pedido-container">
                                <h3>📋 Información del Pedido</h3>
                                <div className="pedido-detalle">
                                    {informacionPedido.map((detalle, index) => (
                                        <div key={index} className="detalle-item">
                                            <p>
                                                💳 <b>Pago:</b> {detalle.pago}
                                            </p>
                                            <p>
                                                📦 <b>Estado:</b> {detalle.estado}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        <button onClick={handleBack} className="boton-volver">
                            Volver a las preguntas
                        </button>
                    </div>
                ) : (
                    // Mostrar respuesta y botón de volver
                    <div className="respuesta-container">
                        <p className="contenedor-mensaje">{respuestas[selectedQuestion]}</p>
                        <button onClick={handleBack} className="boton-volver">
                            Volver a las preguntas
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ChatBotPopUp;
