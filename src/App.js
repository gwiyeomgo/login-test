import React from 'react';
import { GlobalPortal } from './GlobalPortal';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import OAuthLoginResult from "./components/OAuthLoginResult";
import BoardPage from "./pages/BoardPage";
import LoginPage from "./pages/LoginPage";
export default function App() {
    return (React.createElement(GlobalPortal.Provider, null,
        React.createElement(Routes, null,
            React.createElement(Route, { path: "/oauth-login-result", element: React.createElement(OAuthLoginResult, null) }),
            React.createElement(Route, { path: "/boards", element: React.createElement(BoardPage, null) }),
            React.createElement(Route, { path: "/", element: React.createElement(LoginPage, null) }))));
}
