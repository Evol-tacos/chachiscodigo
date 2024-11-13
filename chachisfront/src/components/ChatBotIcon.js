import React, { useState } from 'react';
import ChatBot from './ChatBotPopUp.js'; // Importa el componente de la ventana de chat
import './estilos/ChatBotIcon.css';
import iconoChat from './icons/chatbot-icono.png';

function ChatBotIcon() {
    const [isChatOpen, setChatOpen] = useState(false);

    const handleIconClick = () => setChatOpen(true);
    const handleCloseChat = () => setChatOpen(false);

    return (
        <div>
            {!isChatOpen && (
                <div className="chat-bot-icon" onClick={handleIconClick}>
                    <img src={iconoChat} alt="ChatBot Icon" />
                </div>
            )}
            {isChatOpen && (
                <ChatBot onClose={handleCloseChat} />
            )}
        </div>
    );
}

export default ChatBotIcon;
