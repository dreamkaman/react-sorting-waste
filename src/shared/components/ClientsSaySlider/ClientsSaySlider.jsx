import { slides } from './data.js';
import s from './ClientsSaySlider.module.scss';
import GetSvg from '../GetSvg/index.js';

const ClientsSaySlider = ({ activeSlideIndex, prevSlide, nextSlide }) => {
  const slidesMarkUp = slides.map((slide, index) => (
    <div className={activeSlideIndex === index ? s.activeSlide : s.slide} key={slide.id}>
      <div className={s.clientPhotoWrapper}>
        <img className={s.clientPhoto} src={slide.imageURL} alt="Client" />
        <GetSvg name={'icon-quotes'} className={s.iconQuote} />
      </div>
      <div className={s.clientQuoteWithName}>
        <p className={s.clientQuote}>{slide.quote}</p>
        <p className={s.clientName}>{slide.clientName}</p>
      </div>
    </div>
  ));

  return (
    <div className={s.slider}>
      {slidesMarkUp}
      <div className={s.sliderBtnWrapper}>
        <button className={s.btn} onClick={prevSlide}>
          <GetSvg name={'icon-arrow-left'} className={s.arrow} />
        </button>
        <button className={s.btn} onClick={nextSlide}>
          <GetSvg name={'icon-arrow-right'} className={s.arrow} />
        </button>
      </div>
    </div>
  );
};

export default ClientsSaySlider;
