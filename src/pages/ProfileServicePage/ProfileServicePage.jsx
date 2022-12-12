import { useState } from 'react';

import styles from './ProfileServicePage.module.scss';
import './ProfileServicePage.css';
import EditService from 'modules/EditService';
import AboutService from 'modules/AboutService';
import ChangePasswordForm from 'modules/ChangePasswordForm/EditService/ChangePasswordForm';

const ProfileServicePage = () => {
  const [selected, setSelected] = useState('btn1');
  const [isOpenAbout, setIsOpenAbout] = useState(true);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenPassword, setIsOpenPassword] = useState(false);

  const handleClick = (btn) => {
    setSelected(btn);
    if (btn === 'btn1') {
      setIsOpenAbout(true);
      setIsOpenEdit(false);
      setIsOpenPassword(false);
    } else if (btn === 'btn2') {
      setIsOpenAbout(false);
      setIsOpenPassword(false);
      setIsOpenEdit(true);
    } else {
      setIsOpenEdit(false);
      setIsOpenAbout(false);
      setIsOpenPassword(true);
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.buttonList}>
        <button
          className={selected === 'btn1' ? 'selected' : 'notSelected'}
          onClick={() => handleClick('btn1')}
        >
          My Profile
        </button>
        <button
          className={selected === 'btn2' ? 'selected' : 'notSelected'}
          onClick={() => handleClick('btn2')}
        >
          My Settings
        </button>
        <button
          className={selected === 'btn3' ? 'selected' : 'notSelected'}
          onClick={() => handleClick('btn3')}
        >
          Change Password
        </button>
      </div>
      {isOpenAbout && <AboutService />}
      {isOpenEdit && <EditService />}
      {isOpenPassword && <ChangePasswordForm />}
    </main>
  );
};

export default ProfileServicePage;
