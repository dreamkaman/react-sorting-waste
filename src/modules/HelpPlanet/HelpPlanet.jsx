import styles from './HelpPlanet.module.scss';
import truckImage from '../../images/TruckMainPage.png';
import { Link } from 'react-router-dom';


const HelpPlanet = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.form}>
          <div>
            <p className={styles.slogan}>Help our planet</p>
            <h3 className={styles.formTitle}>Find or register</h3>
            <h3 className={styles.formTitle}>Quality Waste</h3>
            <h3 className={styles.formTitle}>Service</h3>
          </div>
          <ul className={styles.buttonList}>
            <li className={styles.buttonListItem}>
              <Link className={styles.findLink} to="/services">
                FIND SERVICE
              </Link>
            </li>
            <li className={styles.buttonListItem}>
              <Link className={styles.registerLink} to="/signup">
                REGISTER SERVICE
              </Link>
            </li>
          </ul>
        </div>
        <img src={truckImage} alt='truck' className={styles.image}></img>
      </div>
    </section>
  )
};

export default HelpPlanet;
