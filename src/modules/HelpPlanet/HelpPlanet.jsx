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
          <div className={styles.text}>
            <p className={styles.description}>Looking to recycle your unwanted items? Make your recycling needs as easy as possible, use our GoEco to find a location near you!</p>
            <div className={styles.sloganList}>
              <p className={styles.sloganSearch}>Search.</p>
              <p className={styles.sloganFind}>Find.</p>
              <p className={styles.sloganRecycle}>Recycle.</p>
            </div>
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
