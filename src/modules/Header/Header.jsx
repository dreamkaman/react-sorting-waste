import { Link, NavLink } from 'react-router-dom';
import img from '../../images/png/logo.png';

import s from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <div className={s.contacts}>
        <p className={s.text}>Have any questions?</p>
        <a className={s.tel} href="tel:+380441234567">
          +38 044 123 45 67
        </a>
        <a className={s.mail} href="mailto:support@wasteservice.com">
          support@wasteservice.com
        </a>
      </div>
      <div className="container">
        <nav className={s.navigation}>
          <Link className={s.logoLink} to="/">
            <img className={s.logo} src={img} alt="logo" />
            <p className={s.txtEco}>
              <span className={s.txtGo}>Go</span>ECO
            </p>
          </Link>

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
          <ul className={s.authList}>
            <li className={s.authListItem}>
              <Link className={s.loginLink} to="/login">
                Login
              </Link>
            </li>
            <li className={s.authListItem}>
              <Link className={s.signupLink} to="/signup">
                Sign up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
