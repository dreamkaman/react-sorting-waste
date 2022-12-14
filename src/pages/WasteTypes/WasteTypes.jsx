import styles from './WasteTypes.module.scss';
import { data } from '../../modules/WasteTypesSlider/dataWasteSlide';

const WasteTypes = () => {
  return (
    <div className={'container'}>
      <div className={styles.container}>
        <h3>Let's Sort Out</h3>

        {data.map((slide) => (
          <div className={styles.card} key={slide.id} id={slide.id}>
            <img src={slide.image} alt={slide.title} />
            <div className={styles.textBlock}>
              <h6>{slide.title}</h6>
              <p>{slide.fullDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WasteTypes;
