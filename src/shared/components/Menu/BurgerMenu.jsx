import React, { useEffect, useState } from 'react';

import styles from './BurgerMenu.module.scss';
import classnames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import {
  faXmark,
  faHouse,
  faMagnifyingGlass,
  faCircleInfo,
  faRightToBracket,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from '../../../images/png/logo.png';
import logoFooter from '../../../images/png/logoFooter.png';
import image from '../../../images/backgroundForm.png';


const BurgerMenu = (props) => {

  /*const showSidebar = () => setSidebar(!sidebar);*/

  const { onClose, openLogin, openSignUp } = props;

  const setActive = ({ isActive }) =>
    classnames(isActive && styles.navLinkActive, styles.navLink);

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(() => {
    width > 768 && onClose();
  },[width]);

  return (
    <div className={styles.burgerMenu}>

      <div className={styles.navbar} style={{ backgroundImage: `url(${image})` }}>
        <FontAwesomeIcon onClick={onClose} className={styles.closeIcon} icon={faXmark} />
        <div className={styles.logoContainer} >
          <img src={logoFooter} alt='logo' />
          <p>
            <span>Go</span>ECO
          </p>
        </div>
      </div>

      <nav className={styles.navMenu}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <NavLink to='/'
                     className={setActive} onClick={onClose}>
              <FontAwesomeIcon icon={faHouse} className={styles.icon} /> Home
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink
              to='/services'
              className={setActive} onClick={onClose}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} /> Find service
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink
              to='/about'
              className={setActive} onClick={onClose}
            >
              <FontAwesomeIcon icon={faCircleInfo} className={styles.icon} /> About us
            </NavLink>
          </li>

          <li className={styles.menuItem}>
            <button
              onClick={() => {
                onClose();
                openLogin();
              }}
              className={styles.navLink}
            >
              <FontAwesomeIcon icon={faRightToBracket} className={styles.icon} /> Login
            </button>
          </li>
          <li className={styles.menuItem}>
            <button
              onClick={() => {
                onClose();
                openSignUp();
              }}
              className={styles.navLink}
            >
              <FontAwesomeIcon icon={faUserPlus} className={styles.icon} /> Sign up
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;