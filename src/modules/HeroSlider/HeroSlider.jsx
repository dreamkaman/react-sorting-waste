import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './HeroSlider.module.scss';

import './HeroSlider.css'

import slider1 from './../../images/hero-slider/slider1.jpg';
import slider2 from './../../images/hero-slider/slider2.jpg';
import slider3 from './../../images/hero-slider/slider3.jpg';
import slider4 from './../../images/hero-slider/slider4.jpg';
import slider5 from './../../images/hero-slider/slider5.jpg';


const HeroSlider = () => {
  return (
    <Carousel className={styles.mainSlide} showArrows={false} autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false} showIndicators={true} dynamicHeight={true}>
      <div>
        <img className={styles.image} src={slider1} alt='slider-1'/>
        <div className={styles.slideInfo}>
          <p>Find Sustainable Waste Services</p>
          <h1>Waste Manegment.<br />
            Dumpster Rentals.<br />
            Garbage Pickup.<br />
          </h1>
        </div>
      </div>
      <div>
        <img className={styles.image} src={slider2} alt='slider-2' />
        <div className={styles.slideInfo}>
          <p>Find Sustainable Waste Services</p>
          <h1>Lorem Ipsum1.<br />
            Dorore Ipsum1.<br />
            Dorore Pickup1.<br />
          </h1>
        </div>
      </div>
      <div>
        <img className={styles.image} src={slider3} alt='slider-3' />
        <div className={styles.slideInfo}>
          <p>Find Sustainable Waste Services</p>
          <h1>Lorem Ipsum2.<br />
            Dorore Ipsum2.<br />
            Dorore Pickup2.<br />
          </h1>
        </div>
      </div>
      <div>
        <img className={styles.image} src={slider4} alt='slider-3' />
        <div className={styles.slideInfo}>
          <p>Find Sustainable Waste Services</p>
          <h1>Lorem Ipsum2.<br />
            Dorore Ipsum2.<br />
            Dorore Pickup2.<br />
          </h1>
        </div>
      </div>
    </Carousel>
  );
};

export default HeroSlider;
