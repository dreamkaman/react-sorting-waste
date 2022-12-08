import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { logoutServiceOperation } from 'redux/auth/authOperations';

import avatar from 'images/png/avatar-yellow.png';

import s from './Avatar.module.scss';

const Avatar = ({ userName = 'anonymous' }) => {
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(false);
  const contextMenuVisibility = () => {
    setIsVisible(!isVisible);
  };

  const onLogOut = () => {
    dispatch(logoutServiceOperation());
  };

  const contextMenu = (
    <ul className={s.contextMenu} onClick={() => setIsVisible(!isVisible)}>
      <li className={s.contextMenuItem}>
        <Link to="/dashboard">Orders dashboard</Link>
      </li>
      <li className={s.contextMenuItem}>
        <Link to="/waste">Add waste point</Link>
      </li>
      <li className={s.contextMenuItem}>
        <Link to="/profile">Edit profile</Link>
      </li>
      <li className={s.contextMenuItem}>
        <Link to="/" onClick={() => onLogOut()}>
          Logout
        </Link>
      </li>
    </ul>
  );

  return (
    <div className={s.avatarWrapper}>
      <p className={s.helloTxt}>Hello, {userName}</p>
      <div className={s.avatar} onClick={contextMenuVisibility}>
        <img src={avatar} alt="Avatar" className={s.image} />
      </div>
      {isVisible ? contextMenu : null}
    </div>
  );
};

export default Avatar;
