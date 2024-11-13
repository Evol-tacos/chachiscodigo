import React from 'react';
import './estilos/ChatBot.css';
import chaticon from './icons/chatbot-icon.png';
import closeIcon from './icons/exit-icon.png'; // Añade la importación del ícono de cerrar

function ChatBotPopUp({ onClose }) {
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
                <p className='contenedor-mensaje'>¡Hola!, soy tu asistente de compras, ¿Cómo puedo ayudarte hoy?</p>
                <button>¿Cuál es la información de contacto de Chachis Pastelería?</button>
                <button>¿Cuál es el horario de Chachis Pastelería?</button>
                <button>¿Cuáles son las formas de pago que se manejan en Chachis Pastelería?</button>
                <button>¿Cuál es su producto más vendido?</button>
                <button>¿Cuál es el estado de mi pedido?</button>
            </div>
            <p className="select-option">Selecciona una opción</p>
        </div>
    );
}

export default ChatBotPopUp;