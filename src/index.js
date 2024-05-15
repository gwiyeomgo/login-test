import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { serviceWorker } from './server/browser';
import './index.css';
//https://seungahhong.github.io/blog/2022/07/2022-07-25-msw/
//요청 핸들러에 추가되지 않는 요청을 처리하는 방법
serviceWorker.start({ onUnhandledRequest: 'bypass' });
const container = document.getElementById('root');
const root = createRoot(container);
root.render(React.createElement(React.StrictMode, null,
    React.createElement(BrowserRouter, null,
        React.createElement(App, null))));
