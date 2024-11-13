import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import MenuHeader from './components/Menu-Header';
import Menu from './components/Menu';
import Main from './components/Main';
import ChatBotIcon from './components/ChatBotIcon';
import ChatBot from './components/ChatBotPopUp';
import Cumple from './components/Menu-cumple.js';
import Infantil from './components/Menu-infantil.js';
import Perfil from './components/PerfilUser.js';
import './App.css';

function App() {

    return (
        <Router>
            <div className="App">
                <ConditionalHeader />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/chatbot" element={<ChatBot />} />
                    <Route path="/bday" element={<Cumple />} />
                    <Route path="/infantil" element={<Infantil />} />
                    <Route path='/perfil' element={<Perfil />} />
                </Routes>

                <ChatBotIcon />
            </div>
        </Router>
    );
}

function ConditionalHeader() {
    const location = useLocation();

    if (location.pathname === "/menu") {
        return <MenuHeader />;
    }
    return <Header />;
}

export default App;