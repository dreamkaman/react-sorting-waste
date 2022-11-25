import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './HeroSlider.module.scss';

import slider1 from './../../images/hero-slider/slider1.png';

const HeroSlider = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false} showIndicators={true}>
      <div>
        <img src={slider1} />

        <div className={styles.container}>
          <p>Find Sustainable Waste Services</p>
          <h1>Waste Manegment.</h1>
          <h1>Dumpster Rentals.</h1>
          <h1>Garbage Pickup.</h1>
        </div>
        {/*<p className={styles.legend1}>test 1</p>*/}
        {/*<p className='legend'>Legend 1</p>*/}
      </div>
      <div>
        <img src={slider1} />
        {/*<h1 className='legend'>Legendarios</h1>*/}
        {/*<p className="legend">Legend 2</p>*/}
      </div>
      <div>
        <img src={slider1} />
        {/*<p className='legend'>Legend 3</p>*/}
      </div>
    </Carousel>
  );
};

export default HeroSlider;
