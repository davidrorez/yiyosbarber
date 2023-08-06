import React from 'react';
import '../../App.css';
import NavBar from '../navbar/NavBar';
import CarouselFade from './Carousel';
import Haircut from './Haircut';
import Prices from './Prices';
import Footer from '../footer/Footer';
import About from './About';

function Home() {

  return (
    <div> 
      <NavBar />
      <CarouselFade/>
      <Haircut/>
      <Prices/>
      <About />
      <Footer/>
    </div>
  );
}

export default Home;
