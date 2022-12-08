import { useEffect } from 'react';
// import { } from 'redux/orders/orderOperations';
import { getServicesOperation } from 'redux/services/servicesOperations';

import { ordersArray } from 'redux/orders/orderSelectors';
import { ecoServicesArray } from 'redux/services/servicesSelectors';
import { wastePointsArray } from 'redux/wastePoints/wastePointsSelectors';

import styles from './WebsiteUsersInfo.module.scss';

const WebsiteUsersInfo = () => {
  return (
    <section className={styles.wrap}>
      <div className={styles.statisticList}>
        <div className={styles.statisticList1}>
          <div className={styles.statisticItem}>
            <p className={styles.numbers}>30+</p>
            <p className={styles.category}>Customer</p>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus modi quibusdam
            </p>
          </div>
          <div className={styles.statisticItem}>
            <p className={styles.numbers}>30+</p>
            <p className={styles.category}>Eco Services</p>
            <p className={styles.description}>
              Lorem ipsum is simply dummy, adipisicing elit. Delectus modi quibusdam
            </p>
          </div>
        </div>
        <div className={styles.statisticList2}>
          <div className={styles.statisticItem}>
            <p className={styles.numbers}>30+</p>
            <p className={styles.category}>Waste Mangements</p>
            <p className={styles.description}>
              Lorem ipsum is simply dummy, adipisicing elit. Delectus modi quibusdam
            </p>
          </div>
          <div className={styles.statisticItem}>
            <p className={styles.numbers}>68k</p>
            <p className={styles.category}>Happy Customers</p>
            <p className={styles.description}>
              Lorem ipsum is simply dummy, adipisicing elit. Delectus modi quibusdam
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteUsersInfo;
