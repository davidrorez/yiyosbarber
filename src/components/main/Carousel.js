import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../App.css';
import bg from '../../img/main_bg.jpg';
import bg2 from '../../img/two_bg.jpg';
import bg3 from '../../img/three_bg.jpg';

const carouselItems = [
  {
    bgImage: bg,
    caption: 'Yiyo\'s Barber Shop',
  },
  {
    bgImage: bg2,
    caption: 'Somos una barbería con un estilo clásico',
  },
  {
    bgImage: bg3,
    caption: '¡Agende su cita aquí!',
    buttonText: 'Agenda de citas',
    buttonLink: 'https://www.calengoo.com/booking/yiyo_s_barber_shop',
  },
];

function CarouselFade() {
  return (
    <Carousel fade indicators={false}>
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index}>
          <div className="App">
            <div
              className="carousel-image-container"
              style={{ backgroundImage: `url(${item.bgImage})`, backgroundPosition: index === 2 ? 'bottom' : 'top' }}
            >
              <Carousel.Caption>
                <div>
                  {item.caption && <h3 className="text">{item.caption}</h3>}
                  {item.buttonText && (
                    <div className="caption-content">
                      <a className="btn btn-p btn-lg" href={item.buttonLink} target="_blank" rel="noopener noreferrer">
                        {item.buttonText}
                      </a>
                    </div>
                  )}
                </div>
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselFade;
