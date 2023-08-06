import React, {useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bg from './img/background.jpg';
import bg2 from './img/background2.jpg';
import bg3 from './img/background3.jpg';
import './App.css';

function CarouselFade() {

const [info, setInfo] = useState('')

  useEffect(() => {
    fetch('http://localhost:4000/')
    .then(response => response.json())
    .then(data => {
    console.log(data)
    setInfo(data)
    })
    .catch(error => {
      // Manejar el error
    });
  }, [])

  return (
    <Carousel fade indicators={false}>
      <Carousel.Item>
        <div className="App">
          <div
            className="carousel-image-container"
            style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'top' }}
          >
            <Carousel.Caption >
              <h3 className="text"> {"cargando..."} </h3>
            </Carousel.Caption>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="App">
          <div
            className="carousel-image-container"
            style={{ backgroundImage: `url(${bg2})`, backgroundPosition: 'top' }}
          >
            <Carousel.Caption>
              <h3 className="text">Somos una barbería con <br/> un estilo clásico</h3>
            </Carousel.Caption>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="App">
          <div
            className="carousel-image-container"
            style={{ backgroundImage: `url(${bg3})`, backgroundPosition: 'button' }}
          >
            <Carousel.Caption>
            <div className="caption-content">
              <h3 className="text">¡Agende su cita aquí! </h3>
              <a className="btn btn-p btn-lg" href="https://www.calengoo.com/booking/yiyo_s_barber_shop"
                target="_blank" rel="noopener noreferrer">Agenda de citas</a>
            </div>
            </Carousel.Caption>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;




