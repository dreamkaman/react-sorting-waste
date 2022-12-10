import styles from './HelpPlanet.module.scss';
import truckImage from '../../images/TruckMainPage.png';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import RegistrationForm from '../RegistrationForm';
import { useState } from 'react';

const HelpPlanet = () => {

  const [openSignUp, setOpenSignUp] = useState(false);

  return (
    <section>
      <div className={styles.wrap}>
        <div className={styles.form}>
          <div>
            <p className={styles.slogan}>Help our planet</p>
            <h3 className={styles.formTitle}>Find or register</h3>
            <h3 className={styles.formTitle}>Quality Waste</h3>
            <h3 className={styles.formTitle}>Service</h3>
          </div>
          <ul className={styles.buttonList}>
            <li className={styles.buttonListItem}>
              <Link className={styles.link} to='/services'>
                FIND SERVICE
              </Link>
            </li>
            <button className={styles.buttonListItem} onClick={() => setOpenSignUp(true)}>
              REGISTER SERVICE
            </button>
            <Modal
              open={openSignUp}
              onClose={() => {
                setOpenSignUp(false);
              }}
            >
              <RegistrationForm
                onClose={() => {
                  setOpenSignUp(false);
                }}
              />
            </Modal>
          </ul>
        </div>
        <img src={truckImage} alt='truck' className={styles.image}></img>
      </div>
    </section>
  );
};

export default HelpPlanet;
