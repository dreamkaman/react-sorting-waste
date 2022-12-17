import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Avatar from 'modules/Avatar';
import Burger from 'shared/components/Burger';
import { isLoggined, serviceName } from 'redux/auth/authSelectors';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import img from '../../images/png/logo.png';

import s from './Header.module.scss';
import { useState } from 'react';
import Modal from '../Modal';
import LoginForm from '../LoginFrom';
import RegistrationForm from '../RegistrationForm';
import BurgerMenu from '../../shared/components/Menu/BurgerMenu';

const Header = () => {
  const isLogginedUser = useSelector(isLoggined);
  const serviceNameProp = useSelector(serviceName);

  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openBurger, setOpenBurger] = useState(false);

  const authButtons = (
    <ul className={s.authList}>
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
          toast={toast}
        />
      </Modal>
      <Modal
        open={openLogin}
        onClose={() => {
          setOpenLogin(false);
          console.log('Works!');
        }}
      >
        <LoginForm
          onClose={() => {
            setOpenLogin(false);
          }}
          toast={toast}
        />
      </Modal>
      <li className={s.authListItem}>
        <button className={s.authButton} onClick={() => setOpenLogin(true)}>
          Login
        </button>
      </li>
      <li className={s.authListItem}>
        <button className={s.authButton} onClick={() => setOpenSignUp(true)}>
          Sign up
        </button>
      </li>
    </ul>
  );

  return (
    <header className={s.headerUnderline}>
      <div className={s.contacts}>
        <p className={s.text}>Have any questions?</p>

        <ul className={s.contactLinks}>
          <li>
            <a className={s.tel} href="tel:+380441234567">
              +38 044 123 45 67
            </a>
          </li>
          <li>
            <a className={s.mail} href="mailto:support@wasteservices.com">
              support@wasteservices.com
            </a>
          </li>
        </ul>
        <div className={s.avatarWrapper}>
          {isLogginedUser ? <Avatar userName={serviceNameProp} onClose={() => {}} /> : null}
        </div>
      </div>

      <div className="container">
        <nav className={s.navigation}>
          <Link className={s.logoLink} to="/">
            <img className={s.logo} src={img} alt="logo" />
            <p className={s.txtEco}>
              <span className={s.txtGo}>Go</span>ECO
            </p>
          </Link>

          <Burger open={() => setOpenBurger(true)} />

          <Modal
            open={openBurger}
            onClose={() => {
              setOpenBurger(false);
            }}
          >
            <BurgerMenu
              isLogginedUser={isLogginedUser}
              onClose={() => {
                setOpenBurger(false);
              }}
              openLogin={() => {
                setOpenLogin(true);
              }}
              openSignUp={() => {
                setOpenSignUp(true);
              }}
            />
          </Modal>

          <ul className={s.menu}>
            <li className={s.menuItem}>
              <NavLink to="/" className={({ isActive }) => (isActive ? s.isActive : s.navLink)}>
                home
              </NavLink>
            </li>
            <li className={s.menuItem}>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? s.isActive : s.navLink)}
              >
                find service
              </NavLink>
            </li>
            <li className={s.menuItem}>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? s.isActive : s.navLink)}
              >
                about us
              </NavLink>
            </li>
          </ul>
          <div className={s.authButtonsWrapper}>{isLogginedUser ? null : authButtons}</div>
        </nav>
      </div>
      <ToastContainer />
    </header>
  );
};

export default Header;
