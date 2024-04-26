import React from 'react';
import { GlobalPortal } from './GlobalPortal';
import './App.css';
import StartPage  from './pages/index'
import { Routes , Route } from 'react-router-dom';
import OAuthLoginResult from "./components/OAuthLoginResult";


export default function App() {
  return (
      <GlobalPortal.Provider>
        <Routes>
            <Route path="/oauth-login-result" element={<OAuthLoginResult/>}/>
            <Route path="/" element={<StartPage />} />
        </Routes>
      </GlobalPortal.Provider>
  );
}
