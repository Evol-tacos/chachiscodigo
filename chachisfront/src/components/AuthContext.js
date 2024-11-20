import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const token = document.cookie.split('; ').find(row => row.startsWith('token='));
        const name = localStorage.getItem('userName');
        if (token && name) {
            setIsAuthenticated(true);
            setUserName(name);
        }
    }, []);


    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, userName, setUserName}}>
            {children}
        </AuthContext.Provider>
    );
};