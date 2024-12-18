import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './components/AuthContext';
import Header from './components/Header.js'; 
import MenuHeader from './components/Menu-Header.js';
import MenuAdmin from './components/HeaderAdmin.js';
import Menu from './components/Menu.js';
import Main from './components/Main';
import ChatBotIcon from './components/ChatBotIcon';
import ChatBot from './components/ChatBotPopUp';
import Cumple from './components/Menu-cumple.js';
import Infantil from './components/Menu-infantil.js';
import Perfil from './components/PerfilUser.js';
import Cambiar from './components/CambiarContra.js';
import Pedido from './components/Pedidos.js';
import Personalizado from './components/Pedidos.js';
import Wedding from './components/Menu-Wedding.js';
import Agregar from './components/addCarrito.js';
import PP from './components/ProcederPago.js';
import PA from './components/PerfilAdmin.js'; //Para acceder a la página del administrador
import './App.css';


function ConditionalHeader() {
    const location = useLocation();

    if (location.pathname === "/menu") {
        return <MenuHeader />;
    }
    if (location.pathname === "/PA") {
        return <MenuAdmin />;
    }
    return <Header />;
}

function App() {
    return (
        <AuthProvider>
            <Router>
            <div className="App">
                <ConditionalHeader />
                <Routes>

                <Route path="/" element={<Main />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/chatbot" element={<ChatBot />} />
                        <Route path="/bday" element={<Cumple />} />
                        <Route path="/infantil" element={<Infantil />} />
                        <Route path='/perfil' element={<PrivateRoute><Perfil/></PrivateRoute>} />
                        <Route path='/cambiar' element={<PrivateRoute><Cambiar /></PrivateRoute>} />
                        <Route path='/pedidos' element={<PrivateRoute><Pedido /></PrivateRoute>} />
                        <Route path='/personalizado' element={<PrivateRoute><Personalizado /></PrivateRoute>} />
                        <Route path='/wedding' element={<PrivateRoute><Wedding /></PrivateRoute>} />
                        <Route path='/add' element={<PrivateRoute><Agregar /></PrivateRoute>} />
                        <Route path='/PP' element={<PrivateRoute><PP /></PrivateRoute>} />
                        <Route path='/PA' element={<PrivateRoute><PA /></PrivateRoute>} />

                </Routes>
                <ConditionalChatBot />
            </div>
        </Router>
        </AuthProvider>
    );
}


function PrivateRoute({ children }) {
    const { isAuthenticated } = React.useContext(AuthContext);

    return isAuthenticated ? children : <Navigate to="/" />;
}

function ConditionalChatBot() {
    const location = useLocation();

    // Renderiza el ícono del ChatBot solo si no estás en /pa
    return location.pathname !== "/pa" ? <ChatBotIcon /> : null;
}


export default App;