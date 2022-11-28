import { slides } from './data.js';
import s from './ClientsSaySlider.module.scss';
import GetSvg from '../GetSvg/index.js';

const ClientsSaySlider = () => {
  const slidesMarkUp = slides.map((slide) => (
    <div className={s.clientPhotoWithTextWrapper} key={slide.id}>
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
  return <div className={s.slider}>{slidesMarkUp}</div>;
};

export default ClientsSaySlider;
