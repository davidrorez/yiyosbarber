import React from 'react';
import '../../App.css';
import ImgBarber from './Images'
import hc1 from '../../img/hc1.jpg';
import hc2 from '../../img/hc2.jpg';
import hc3 from '../../img/hc3.jpg';
import hc4 from '../../img/hc4.jpg';
import backgroundImage from '../../img/four_bg.jpg';

function Haircut() {
  return (
    <div className="div-space">
      <h1 className="text-center">
        <strong>
          Nuestros Cortes
        </strong>
      </h1>
      <div
        className="background-container"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          marginTop: '8vh'
        }}
      >
        <div className="container">
          <div className="row p-3">
            <ImgBarber imgBarber={hc1} />
            <ImgBarber imgBarber={hc2} />
            <ImgBarber imgBarber={hc3} />
            <ImgBarber imgBarber={hc4} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Haircut;
