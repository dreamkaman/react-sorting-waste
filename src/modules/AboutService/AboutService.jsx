import styles from './AboutService.module.scss';
import serviceImage from '../../images/serviceImage.png';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';

import { getWastePointsByEcoServiceIdOperation } from 'redux/wastePoints/wastePointsOperations';

const AboutService = () => {

  const dispatch = useDispatch();

  const [wastepoints, setWastepoints] = useState([]);

  const service = useSelector((state) => state.logginedService.serviceInfo);

  const fetchApi = async () => {
    const requestObject = await dispatch(getWastePointsByEcoServiceIdOperation(service.id));

    setWastepoints(requestObject.payload.successObject);

  }
  

  useEffect(() => {
    fetchApi();
  }, [])

  return (
    <section className={styles.profileWrap}>
      <div className={styles.title}>
        <h1 className={styles.text}>My Profile</h1>
        <h2>Photo</h2>
        <img className={styles.photo} src={serviceImage} />  
      </div>
      <div className={styles.detailsList}>
        <div className={styles.detail}>
          <label className={styles.label}>Company name</label>
          <p className={styles.detailText}>{service.name}</p>
        </div>
        <div className={styles.detail}>
          <label className={styles.label}>Phone</label>
          <p className={styles.detailText}>{service.phoneNumber}</p>
        </div>
        <div className={styles.detail}>
          <label className={styles.label}>Address</label>
          <p className={styles.detailText}>{service.country}, {service.city}, {service.address}</p>
        </div>
        <div className={styles.detail}>
          <label className={styles.label}>Gmail</label>
          <p className={styles.detailText}>{service.email}</p>
        </div>
        <div className={styles.detail}>
          <label className={styles.label}>Waste points addresses</label>
            <ul className={styles.wastepointsList}>
              {wastepoints.map(wastepoint => {
                return (
                    <li className={styles.detailTextWastepoint} key={wastepoint.id}>{wastepoint?.wasteAddress.country}, {wastepoint?.wasteAddress.city}, {wastepoint?.wasteAddress.street}</li>
                )
          })}
            </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutService;
