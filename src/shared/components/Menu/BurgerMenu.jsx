import React, { useState } from 'react';

import styles from './BurgerMenu.module.scss';
import classnames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { faXmark, faHouse, faMagnifyingGlass, faCircleInfo, faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from '../../../images/png/logo.png';
import logoFooter from '../../../images/png/logoFooter.png';
import s from '../../../modules/Header/Header.module.scss';



const BurgerMenu = (props) => {

  /*const showSidebar = () => setSidebar(!sidebar);*/

  const { onClose } = props;

  const setActive = ({ isActive }) =>
    classnames(isActive && styles.navLinkActive, styles.navLink);

  return (
    <div className={styles.burgerMenu}>

      <div className={styles.navbar}>
        <FontAwesomeIcon onClick={onClose} className={styles.closeIcon} icon={faXmark} />
        <Link className={styles.logoLink} to='/'>
          {/*<img className={styles.logo} src={img} alt="logo" />*/}
          <img src={logoFooter} alt='logo' />
          <p>
            <span>Go</span>ECO
          </p>
        </Link>
      </div>

      <nav className={styles.navMenu}>


        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <NavLink to='/'
                     className={setActive}>
              <FontAwesomeIcon icon={faHouse} className={styles.icon}/> Home
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink
              to='/services'
              className={setActive}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon}/> Find service
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink
              to='/about'
              className={setActive}
            >
              <FontAwesomeIcon icon={faCircleInfo} className={styles.icon}/> About us
            </NavLink>
          </li>

          <li className={styles.menuItem}>
            <button
              className={styles.navLink}
            >
              <FontAwesomeIcon icon={faRightToBracket} className={styles.icon}/> Login
            </button>
          </li>
          <li className={styles.menuItem}>
            <button
              className={styles.navLink}
            >
              <FontAwesomeIcon icon={faUserPlus} className={styles.icon}/> Sign up
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;