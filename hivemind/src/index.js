import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the change in import
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Correct usage for React 18+
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
