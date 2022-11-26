import styles from './WebsiteUsersInfo.module.scss';

const WebsiteUsersInfo = () => {
  return (
    <section className={styles.container}>
      <div className={styles.statisticList}>
        <div className={styles.statisticItem}>
          <h2 className={styles.title}>30+</h2>
          <p className={styles.category}>Customer</p>
          <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus modi quibusdam</p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.statisticItem}>
          <h2 className={styles.title}>30+</h2>
          <p className={styles.category}>Eco Services</p>
          <p className={styles.description}>Lorem ipsum is simply dummy, adipisicing elit. Delectus modi quibusdam</p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.statisticItem}>
          <h2 className={styles.title}>30+</h2>
          <p className={styles.category}>Waste Mangements</p>
          <p className={styles.description}>Lorem ipsum is simply dummy, adipisicing elit. Delectus modi quibusdam</p>
          <div className={styles.line}></div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.statisticItem}>
          <h2 className={styles.title}>68k</h2>
          <p className={styles.category}>Happy Customers</p>
          <p className={styles.description}>Lorem ipsum is simply dummy, adipisicing elit. Delectus modi quibusdam</p>
          <div className={styles.line}></div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteUsersInfo;
