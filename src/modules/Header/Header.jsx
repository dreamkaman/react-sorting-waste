import { Link, NavLink } from 'react-router-dom';

import Avatar from 'modules/Avatar';
import Burger from 'shared/components/Burger';

import img from '../../images/png/logo.png';

import s from './Header.module.scss';

const Header = () => {
  const isLoggined = false; //should be red from Redux

  const authButtons = (
    <ul className={s.authList}>
      <li className={s.authListItem}>
        <Link className={s.authLink} to="/login">
          Login
        </Link>
      </li>
      <li className={s.authListItem}>
        <Link className={s.authLink} to="/signup">
          Sign up
        </Link>
      </li>
    </ul>
  );

  return (
    <header>
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
        <div className={s.avatarWrapper}>{isLoggined ? <Avatar /> : null}</div>
      </div>

      <div className="container">
        <nav className={s.navigation}>
          <Link className={s.logoLink} to="/">
            <img className={s.logo} src={img} alt="logo" />
            <p className={s.txtEco}>
              <span className={s.txtGo}>Go</span>ECO
            </p>
          </Link>

          <Burger />

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
          <div className={s.authButtonsWrapper}>{isLoggined ? null : authButtons}</div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
