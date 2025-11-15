import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaHome, FaBook, FaConciergeBell, FaPhoneAlt, FaInfoCircle } from 'react-icons/fa';

const MenuBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">


        <Link className="navbar-brand" to="/">
          Mi Web React
        </Link>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                <FaHome className="me-1" />
                Inicio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contenido">
                <FaBook className="me-1" />
                Contenido
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/servicios">
                <FaConciergeBell className="me-1" />
                Servicios
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contactos">
                <FaPhoneAlt className="me-1" />
                Contactos
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/acerca">
                <FaInfoCircle className="me-1" />
                Acerca de
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
