import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./HeroSlider.module.css";

const HeroSlider = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      <div>
        {/*<img src="assets/1.jpeg" />*/}
        <div className={styles.slide1}></div>
        <p className="legend">Legend 1</p>
      </div>
      <div>
        {/*<img src="assets/2.jpeg" />*/}
        <div className="slide2"></div>
        <p className="legend">Legend 2</p>
      </div>
      <div>
        {/*<img src="assets/3.jpeg" />*/}
        <div className="slide3"></div>
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default HeroSlider;
