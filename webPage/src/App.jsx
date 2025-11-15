import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MenuBar from './components/MenuBar.jsx';
import Footer from './components/Footer.jsx';

import Inicio from './pages/Inicio.jsx';
import Contenido from './pages/Contenido.jsx';
import Servicios from './pages/Servicios.jsx';
import Contactos from './pages/Contactos.jsx';
import AcercaDe from './pages/AcercaDe.jsx';

const App = () => {
  return (
    <>

      <MenuBar />


      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contenido" element={<Contenido />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/acerca" element={<AcercaDe />} />
          <Route path="*" element={<h2>Página no encontrada</h2>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
