import React from 'react';
import hero1 from './Images/hero1.jpg';
import hero2 from './Images/hero2.jpg';
import hero3 from './Images/hero3.jpg';
import HeroCarousel from 'react-hero-carousel';

function Hero() {
  return (
    <div className='heroBlock'>
      <HeroCarousel>
        <img className='heroPic' src={hero1} />
        <img className='heroPic' src={hero2} />
        <img className='heroPic' src={hero3} />
      </HeroCarousel>
    </div>
  );
}

export default Hero;
