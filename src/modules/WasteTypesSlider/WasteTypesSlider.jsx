import React from 'react';

import styles from './WasteTypesSlider.module.scss';
import './WasteTypesSlider.css';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import arrowRight from '../../images/waste-slider/arrows/right.svg';
import arrowLeft from '../../images/waste-slider/arrows/left.svg';

import { data } from './dataWasteSlide';
import { Link } from 'react-router-dom';


const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <img className={styles.arrows} src={arrowRight} alt='arrowRight' />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <img className={styles.arrows} src={arrowLeft} alt='arrowLeft' />
    </div>
  );
};

const WasteTypesSlider = () => {

  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,

        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.wasteSlider}>
      <Slider {...settings}>
        {data.map((slide, index) =>
          <div className={styles.slide} key={slide.id}>
            <div className={styles.slideImage}>
              <img src={slide.image} alt={slide.title} />
            </div>
            <div className={styles.slideContent}>
              <h6>{slide.title}</h6>
              <p>{slide.description}
                <Link
                  to="/about"
                  className={styles.readMore}
                >...read more
                </Link>
              </p>

            </div>
          </div>,
        )}
      </Slider>
    </div>
  );
};

export default WasteTypesSlider;