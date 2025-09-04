import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// This is the entry point - it starts your React app
// Your HomePage component is the actual landing page users see
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);