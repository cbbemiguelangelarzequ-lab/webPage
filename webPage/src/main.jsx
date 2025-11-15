import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

// Estilos globales
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Fragment: agrupamos sin añadir un div extra */}
      <>
        <App />
      </>
    </BrowserRouter>
  </React.StrictMode>
);
