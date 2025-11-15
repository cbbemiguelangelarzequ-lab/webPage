import React from 'react';

import imgBienvenido from '../assets/bienvenido.jpg';
import imgServicios from '../assets/leon1.jpg';
import imgContacto from '../assets/contacto.jpg';

const Carrousel = () => {
  return (
    <div id="mainCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
        
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={imgBienvenido}
            className="d-block w-100 carousel-image"
            alt="Bienvenido"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Bienvenido</h5>
            <p>Esta es la portada de tu página web.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={imgServicios}
            className="d-block w-100 carousel-image"
            alt="Servicios"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Servicios</h5>
            <p>Muestra aquí información de lo que ofreces.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={imgContacto}
            className="d-block w-100 carousel-image"
            alt="Contacto"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Contacto</h5>
            <p>Invita a tus usuarios a comunicarse contigo.</p>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#mainCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#mainCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
};

export default Carrousel;
