import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { logoutServiceOperation } from 'redux/auth/authOperations';

import avatar from 'images/png/avatar-yellow.png';

import { getWastePointsByEcoServiceIdOperation } from 'redux/wastePoints/wastePointsOperations';

import { isLoggined } from 'redux/auth/authSelectors';

import s from './Avatar.module.scss';
import { useEffect } from 'react';

const Avatar = ({ userName = 'anonymous' }) => {
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(false);

  const ecoserviceId = useSelector(isLoggined);

  useEffect(() => {
    dispatch(getWastePointsByEcoServiceIdOperation(ecoserviceId));
  }, [dispatch, ecoserviceId]);

  const contextMenuVisibility = () => {
    setIsVisible(!isVisible);
  };

  const onLogOut = () => {
    dispatch(logoutServiceOperation());
  };

  const contextMenu = (
    <ul className={s.contextMenu} onClick={() => setIsVisible(!isVisible)}>
      <li className={s.contextMenuItem}>
        <Link to="/dashboard" className={s.contextMenuItemLink}>
          Orders dashboard
        </Link>
      </li>
      <li className={s.contextMenuItem}>
        <Link to="/waste" className={s.contextMenuItemLink}>
          Add waste point
        </Link>
      </li>
      <li className={s.contextMenuItem}>
        <Link to="/profile" className={s.contextMenuItemLink}>
          Edit profile
        </Link>
      </li>
      <li className={s.contextMenuItem} onClick={() => onLogOut()}>
        <Link to="/" className={s.contextMenuItemLink}>
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
