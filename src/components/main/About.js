import React from 'react';
import backgroundImage from '../../img/five_bg.jpg';

function About() {
  return (
    <div className="div-space">
      <h1 className='text-center'>
        <strong>
          Sobre Nosotros
        </strong>
      </h1>
      <div
        className="background-container"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '120vh',
          marginTop: '8vh'
        }}
      >
        <div className="d-flex align-items-center justify-content-center"
          style={{ height: '100vh' }}>
          <h4 className='text-white m-3'>En Yiyo's Barber, nos dedicamos a
            transformar cada corte de cabello en una experiencia de confianza
            y estilo. Nuestra misión es brindar un servicio excepcional que
            refleje la individualidad de cada cliente, realzando su autoestima
            y resaltando su autenticidad.
          </h4>
        </div>
      </div>
    </div >
  );
}

export default About;
