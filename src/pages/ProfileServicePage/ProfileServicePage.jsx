import { useSelector, useDispatch } from 'react-redux';
import { changeServiceInfoOperation } from 'redux/services/servicesOperations';
import { isLoggined } from 'redux/auth/authSelectors';

import { useState, useEffect } from 'react';
import AboutService from 'modules/AboutService';

import styles from './ProfileServicePage.module.scss'
import './ProfileServicePage.css'
import EditService from 'modules/EditService';

const ProfileServicePage = () => {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState("btn1");
  const [isOpenAbout, setIsOpenAbout] = useState(true);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  
  const handleClick = (btn) => {
    setSelected(btn);
    if(btn == "btn1") {
      setIsOpenAbout(true);
      setIsOpenEdit(false);
    } else {
      setIsOpenAbout(false);
      setIsOpenEdit(true);
    } 
  }

  return (
    <main className={styles.container}>
      <div className={styles.buttonList}>
        <button className={
              selected === "btn1" ? "selected" : "notSelected"
            } 
        onClick={() => handleClick("btn1")}>My Profile</button>
        <button  className={
              selected === "btn2" ? "selected" : "notSelected"
            } 
            onClick={() => handleClick("btn2")}>My Settings</button>
      </div>
      { isOpenAbout && <AboutService /> }
      { isOpenEdit && <EditService />}
    </main>
  );
};

export default ProfileServicePage;
