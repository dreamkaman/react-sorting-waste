import { useState } from 'react';
import ClientsSaySlider from 'shared/components/ClientsSaySlider';

import { slides } from '../../shared/components/ClientsSaySlider/data';

import s from './ClientsSay.module.scss';

const ClientsSay = () => {
  const [indexState, setIndexState] = useState(0);

  const onPrevSlideClick = () => {
    if (indexState > 0) {
      setIndexState(indexState - 1);
      return;
    }
    setIndexState(slides.length - 1);
  };

  const onNextSlideClick = () => {
    if (indexState < slides.length - 1) {
      setIndexState(indexState + 1);
      return;
    }
    setIndexState(0);
  };

  return (
    <section className={'container'}>
      <div className={s.wrapper}>
        <h2 className={s.title}>
          TESTIMONIALS
          <span className={s.spanTitle}>What Clients Say</span>
        </h2>
        <ClientsSaySlider
          activeSlideIndex={indexState}
          prevSlide={() => onPrevSlideClick()}
          nextSlide={() => onNextSlideClick()}
        />
      </div>
    </section>
  );
};

export default ClientsSay;
