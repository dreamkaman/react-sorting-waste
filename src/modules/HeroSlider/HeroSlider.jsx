import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './HeroSlider.module.scss';

import './HeroSlider.css';

import { data } from './dataSlider';

const HeroSlider = () => {
  return (
    <Carousel
      showArrows={false}
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      showIndicators={true}
      dynamicHeight={true}>
      {
        data.map((slide, index) =>
          <div key={index}>
            <img className={styles.image} src={slide.image} alt={'slider-' + index} />
            <div className={styles.slideInfo}>
              <p>{slide.description}</p>
              <h2>
                {slide.titles.map((title, index) =>
                  <>{title} <br /></>,
                )}
              </h2>
            </div>
          </div>,
        )
      }

    </Carousel>
  );
};

export default HeroSlider;
