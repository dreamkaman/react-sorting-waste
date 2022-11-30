import styles from './InfoCard.module.scss';
import feedback from '../../../../images/map/feedback.png';
import rating from '../../../../images/map/rating.png';

const InfoCard = ({service, setInfoCard, setIsOpen}) => {
  return (
    <div className={styles.infoCard}>
        <h2 className={styles.infoCard_title}>{service.name}</h2>
        <h3 className={styles.infoCard_type}>Type of recycle: Paper</h3>
        <p className={styles.infoCard_description}>Delivery options:eco taxi</p>
        <div className={styles.block2}>
          <p className={styles.charge}>Free/paid</p>
          <div className={styles.ImageGroup}>
            <img src={feedback} alt='feedback' className={styles.image}/>
            <img src={rating} alt='rating' className={styles.image}/>
          </div>      
        </div>
        <button type='submit' onClick={() => setInfoCard(false)} className={styles.infoCardCancel}>&#10006;</button>
        <div className={styles.infoCard_buttons}>
          <button type='submit' onClick={() => setInfoCard(false)} className={styles.infoCard_button}>Ask Question</button>
          <button type='submit' onClick={() => setIsOpen(true)} className={styles.infoCard_button}>Make An Order</button>
        </div>
    </div>
  )
}

export default InfoCard;
