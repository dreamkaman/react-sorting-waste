import styles from './InfoCard.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfStroke, faPlus, faComments, faStar, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

const InfoCard = ({service, setInfoCard, setIsOpenOrder, setIsOpenQuestion, setIsOpenFeedback, calculateRoute}) => {

  const handleRouteClick = () => {
    calculateRoute(service.position);
  }

  return (
    <div className={styles.infoCard}>
        <h2 className={styles.image}></h2>
        <div className={styles.block1}>
          <p className={styles.name}>{service.name}</p>
          <div className={styles.rating}>
              <FontAwesomeIcon icon={faStar} className={styles.star}/>
              <p className={styles.infoWindow_title}>{service.rating}</p>
          </div>
        </div>
        <p className={styles.description}>Delivery options:eco taxi</p>
        <div className={styles.block2}>
          <p className={styles.charge}>{service.option}</p>
          <div className={styles.ImageGroup}>
            <FontAwesomeIcon icon={faMapLocationDot} className={styles.route} onClick={handleRouteClick}/>
            <div className={styles.tooltipRoute}>
              Build route
            </div> 
            <FontAwesomeIcon icon={faStarHalfStroke} className={styles.feedback} onClick={() => setIsOpenFeedback(true)}/>
            <div className={styles.tooltipFeedback}>
              Leave feedback
            </div> 
            <FontAwesomeIcon icon={faComments} className={styles.ask} onClick={() => setIsOpenQuestion(true)}/>
            <div className={styles.tooltipAsk}>
              Ask A Question
            </div> 
            <FontAwesomeIcon icon={faPlus} className={styles.order} onClick={() => setIsOpenOrder(true)}/>
            <div className={styles.tooltipOrder}>
              Make An Order
            </div> 
          </div>      
        </div>
        <button type='submit' onClick={() => setInfoCard(false)} className={styles.infoCardCancel}>&#10006;</button>
    </div>
  )
}

export default InfoCard;
