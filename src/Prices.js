import React from 'react';
import backgroundImage from './img/tst.png';

function App() {
  return (
    <div className="divSpace">
    <h1 className='text-center'> Nuestros Servicios </h1>

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
