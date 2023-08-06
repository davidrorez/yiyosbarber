import React from 'react';
import './App.css';
import ImgBarber from './Images'
import hc1 from './img/hc1.jpg';
import hc2 from './img/hc2.jpg';
import hc3 from './img/hc3.jpg';
import hc4 from './img/hc4.jpg';

function Haircut() {
  return (
    <div className="divSpace">
      <h1 class="text-center"> Nuestros Cortes </h1>
      <div className="container">
        <div className="row">
          <ImgBarber imgBarber={hc1} />
          <ImgBarber imgBarber={hc2} />
          <ImgBarber imgBarber={hc3} />
          <ImgBarber imgBarber={hc4} />
        </div>
      </div>
    </div>
  );
}
export default Haircut;
