import React, { useState } from 'react';
import './estilos/ChatBot.css';
import chaticon from './icons/chatbot-icon.png';
import closeIcon from './icons/exit-icon.png';

function ChatBotPopUp({ onClose }) {
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    // Objeto con las respuestas para cada pregunta
    const respuestas = {
        contacto: `Puedes contactarnos a través de: 
        - 📞 Teléfono: 6627849240 
        - 📧 Instagram: chahispasteleria
        -📍 Dirección: [Tu dirección aquí]`,
        horario: "- Nuestro horario de atención es: 📅 Lunes a Sábados: 9:00 AM - 5:00 PM 📅 Domingos: 10:00 AM - 2:00 PM",
        pago: "Por el momento solo contamos con pago por transferencia, la informacion se te proporcionara una vez que vayas a realizar el pago de tu pedido",
        producto: "⭐ Nuestro producto más vendido es el pastel de chocolate con fresas. ¡Es el favorito de nuestros clientes! 🍫🍰",
        pedido: "🔍 Para consultar el estado de tu pedido, necesito tu número de orden. ¿Podrías proporcionármelo?"
    };

    // Función para manejar el clic en los botones
    const handleQuestionClick = (questionKey) => {
        setSelectedQuestion(questionKey);
    };

    // Función para volver a las preguntas
    const handleBack = () => {
        setSelectedQuestion(null);
    };

    return (
        <div className="chatbot-popup">
            <div className="chatbot-header">
                <div className='header-content'>
                    <img className='chat-icon' src={chaticon} alt="ChatBot Icon" />
                    <p className="main-text-chat">Asistente</p>
                </div>
                <button className="close-button-chat" onClick={onClose}>
                    <img src={closeIcon} alt="Close" className="close-icon-chat" />
                </button>
            </div>
            <div className="chatbot-content">
                <p className='contenedor-mensaje'>
                    ¡Hola!, soy tu asistente de compras, ¿Cómo puedo ayudarte hoy?
                </p>

                {!selectedQuestion ? (
                    // Mostrar botones de preguntas
                    <>
                        <button onClick={() => handleQuestionClick('contacto')}>
                            ¿Cuál es la información de contacto de Chachis Pastelería?
                        </button>
                        <button onClick={() => handleQuestionClick('horario')}>
                            ¿Cuál es el horario de Chachis Pastelería?
                        </button>
                        <button onClick={() => handleQuestionClick('pago')}>
                            ¿Cuáles son las formas de pago que se manejan en Chachis Pastelería?
                        </button>
                        <button onClick={() => handleQuestionClick('producto')}>
                            ¿Cuál es su producto más vendido?
                        </button>
                        <button onClick={() => handleQuestionClick('pedido')}>
                            ¿Cuál es el estado de mi pedido?
                        </button>
                    </>
                ) : (
                    // Mostrar respuesta y botón de volver
                    <div className="respuesta-container">
                        <p className='contenedor-mensaje'>{respuestas[selectedQuestion]}</p>
                        <button onClick={handleBack} className="boton-volver">
                            Volver a las preguntas
                        </button>
                    </div>
                )}
            </div>
            {!selectedQuestion && (
                <p className="select-option">Selecciona una opción</p>
            )}
        </div>
    );
}

export default ChatBotPopUp;