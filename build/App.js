import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
import { GlobalPortal } from './GlobalPortal';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import OAuthLoginResult from "./components/OAuthLoginResult";
import BoardPage from "./pages/BoardPage";
import LoginPage from "./pages/LoginPage";
export default function App() {
    return (_jsx(GlobalPortal.Provider, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/oauth-login-result", element: _jsx(OAuthLoginResult, {}) }), _jsx(Route, { path: "/boards", element: _jsx(BoardPage, {}) }), _jsx(Route, { path: "/", element: _jsx(LoginPage, {}) })] }) }));
}
