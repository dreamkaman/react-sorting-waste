import styles from './InfoCard.module.scss';
import { useEffect, useState } from 'react'
import { getServiceByIdOperation } from 'redux/services/servicesOperations';
import { getWastePointRatingOperation } from 'redux/rating/ratingOperations';

import { useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, 
  faStarHalfStroke, 
  faPlus, 
  faComments, 
  faStar, 
  faMapLocationDot, 
  faEnvelope, 
  faClock
} from '@fortawesome/free-solid-svg-icons';

const InfoCard = ({serviceId, wastepoint, setInfoCard, setIsOpenOrder, setIsOpenQuestion, setIsOpenFeedback, calculateRoute}) => {

  const dispatch = useDispatch();

  const [service, setService] = useState();
  const [serviceRating, setServiceRating] = useState();

  const handleRouteClick = () => {
    calculateRoute(wastepoint.latitude, wastepoint.longitude);
  }

  const fetchApi = async () => {
    const requestService = await dispatch(getServiceByIdOperation(serviceId));
    setService(requestService.payload.successObject);

    const requestServiceRating = await dispatch(getWastePointRatingOperation(wastepoint.id));
    let rating = parseInt(requestServiceRating.payload.successObject.average);

    setServiceRating(rating);
  }

  useEffect(() => {
    fetchApi();
  }, [serviceId, serviceRating, wastepoint])

  return (
    <div className={styles.infoCard}>
        <h2 className={styles.image}></h2>
        <div className={styles.block1}>
          <p className={styles.name}>{service?.name}</p>
          <div className={styles.rating}>
              <FontAwesomeIcon icon={faStar} className={styles.star}/>
              <p className={styles.infoWindow_title}>{serviceRating}</p>
          </div>
        </div>
        <div className={styles.contactWrap}>
          <FontAwesomeIcon icon={faPhone} className={styles.contactLogo}/>
          <a className={styles.contact} href={'tel:' + service?.phoneNumber}>{service?.phoneNumber}</a>
        </div>
        <div className={styles.contactWrap}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.contactLogo}/>
          <a className={styles.contact} href={'mailto:' + service?.email}>{service?.email}</a>
        </div>
        <div className={styles.contactWrap}>
          <FontAwesomeIcon icon={faClock} className={styles.contactLogo}/>
          <p className={styles.contact}>{service?.workHours}</p>
        </div>
        <p className={styles.description}>Delivery option: {wastepoint?.isDelivery ? 'available' : 'none'}</p>
        <div className={styles.description}>Types of waste:
          <div className={styles.types}>
            {wastepoint?.types.map(type => <span className={styles.type} key={type} >{type}</span>)}
          </div>
        </div>
        <div className={styles.block2}>
          <p className={styles.charge}>{wastepoint?.isFree ? 'Free' : 'Paid'}</p>
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
