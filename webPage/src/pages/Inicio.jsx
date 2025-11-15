import React from 'react';
import Carrousel from '../components/Carrousel.jsx';

const Inicio = () => {
  return (
    <div>
      <Carrousel />

      <h1 className="mt-4">Bienvenido a nuestra Página Web</h1>
      <p>
        Esta es la sección de <strong>Inicio</strong>. aqui podremos mostrar lo que sea.
      </p>
    </div>
  );
};

export default Inicio;
