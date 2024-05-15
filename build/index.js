import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { serviceWorker } from './server/browser';
import './index.css';
//https://seungahhong.github.io/blog/2022/07/2022-07-25-msw/
//요청 핸들러에 추가되지 않는 요청을 처리하는 방법
serviceWorker.start({ onUnhandledRequest: 'bypass' });
var container = document.getElementById('root');
var root = createRoot(container);
root.render(_jsx(React.StrictMode, { children: _jsx(BrowserRouter, { children: _jsx(App, {}) }) }));
