import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-4">
      <div className="container text-center">
        <small>&copy; {new Date().getFullYear()} Mi Web React - Todos los derechos reservados</small>
      </div>
    </footer>
  );
};

export default Footer;
