import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getServicesOperation } from 'redux/services/servicesOperations';
import { getOrdersOperation } from 'redux/orders/orderOperations';
import { getFilteredWastePointsOperation } from 'redux/wastePoints/wastePointsOperations';
import { getAllWastePointRatingsOperation } from 'redux/rating/ratingOperations';

import { ordersArray } from 'redux/orders/orderSelectors';
import { ecoServicesArray } from 'redux/services/servicesSelectors';
import { wastePointsArray } from 'redux/wastePoints/wastePointsSelectors';
import { ratingsArray } from 'redux/rating/ratingSelectors';

import styles from './WebsiteUsersInfo.module.scss';

const WebsiteUsersInfo = () => {
  const dispatch = useDispatch();

  const statCustomers = useSelector(ordersArray)?.length;
  const statEcoServices = useSelector(ecoServicesArray)?.length;
  const statWastPoints = useSelector(wastePointsArray)?.length;
  const statHappyUsers = useSelector(ratingsArray).filter((item) => item?.rating === 5).length;

  useEffect(() => {
    dispatch(getServicesOperation());
    dispatch(getOrdersOperation());
    dispatch(getFilteredWastePointsOperation());
    dispatch(getAllWastePointRatingsOperation());
  }, [dispatch]);

  return (
    <section className={styles.wrap}>
      <div className={styles.statisticList}>
        <div className={styles.statisticList1}>
          <div className={styles.statisticItem}>
            <p className={styles.numbers}>{statCustomers}</p>
            <p className={styles.category}>Customers left orders</p>
          </div>
          <div className={styles.statisticItem}>
            <p className={styles.numbers}>{statEcoServices}</p>
            <p className={styles.category}>Eco services registered</p>
          </div>
        </div>
        <div className={styles.statisticList2}>
          <div className={styles.statisticItem}>
            <p className={styles.numbers}>{statWastPoints}</p>
            <p className={styles.category}>Waste collection points</p>
          </div>
          <div className={styles.statisticItem}>
            <p className={styles.numbers}>{statHappyUsers}</p>
            <p className={styles.category}>Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteUsersInfo;
