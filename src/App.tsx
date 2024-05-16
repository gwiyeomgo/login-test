import React from 'react';
import { GlobalPortal } from './GlobalPortal';
import './App.css';
import { Routes , Route } from 'react-router-dom';
import OAuthLoginResult from "./components/OAuthLoginResult";
import BoardPage from "./pages/BoardPage"
import LoginPage from "./pages/LoginPage";


 function App() {
    return (
        <GlobalPortal.Provider>
            <Routes>
                <Route path="/oauth-login-result" element={<OAuthLoginResult/>}/>
                <Route path="/boards" element={<BoardPage />} />
                <Route path="/" element={<LoginPage />} />
            </Routes>
        </GlobalPortal.Provider>
    );
}

export default App