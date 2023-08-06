import React from 'react';
import backgroundImage from './img/background.jpg';

function About() {
  return (
    <div className="divSpace">
    <h1 className='text-center'> Sobre Nosotros </h1>

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
    <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <h1 className='text'>Descripcion de <br/> Yiyo's Barber Shop</h1>
    </div>
    </div> 
</div >

  );
}

export default About;
