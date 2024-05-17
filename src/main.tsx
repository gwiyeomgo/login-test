import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter  } from 'react-router-dom';
import './index.css';
import App from './App';
import { serviceWorker } from './server/browser';


//https://seungahhong.github.io/blog/2022/07/2022-07-25-msw/
//요청 핸들러에 추가되지 않는 요청을 처리하는 방법
serviceWorker.start({ onUnhandledRequest: 'bypass' });

const rootEl = document.getElementById('root');

if (rootEl) {
    const root = ReactDOM.createRoot(rootEl);
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    );

} else {
    throw 'Root element not found. Unable to render the App.';
}

