import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CokkieProvider } from 'react-cookie'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CokkieProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CokkieProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
