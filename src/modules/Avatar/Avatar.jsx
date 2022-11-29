import { useState } from 'react';
import { Link } from 'react-router-dom';

import avatar from 'images/png/avatar-yellow.png';

import s from './Avatar.module.scss';

const Avatar = ({ userName = 'anonymous' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const contextMenuVisibility = () => {
    setIsVisible(!isVisible);
  };

  const contextMenu = (
    <ul className={s.contextMenu} onClick={() => setIsVisible(!isVisible)}>
      <li className={s.contextMenuItem}>
        <Link to="/profile">Edit profile</Link>
      </li>
      <li className={s.contextMenuItem}>
        <Link to="/">Logout</Link>
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
