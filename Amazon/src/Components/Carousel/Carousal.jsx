import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { img } from './img/Amazon.com._Spend_less._Smile_more/data';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carousal.css';

function CarouselEffect() {
  return (
    <div className='carousel '>
      <Carousel 
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={true}
        showThumbs={false}
      >
        {img.map((imageItemLink, index) => (
          <div key={index}>
            <img src={imageItemLink} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      <div className='hero_img'></div>
    </div>
  );
}

export default CarouselEffect;

