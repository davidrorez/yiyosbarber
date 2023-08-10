import React from 'react';
import backgroundImage from '../../img/prices.jpg';

function App() {
  return (
    <div className="div-space">
      <h1 className='text-center'>
        <strong>
          Nuestros Servicios
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
      </div>
    </div >

  );
}

export default App;
