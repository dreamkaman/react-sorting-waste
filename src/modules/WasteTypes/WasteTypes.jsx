import React from 'react';
import WasteTypesSlider from '../WasteTypesSlider';
import styles from './WasteTypes.module.scss'

const WasteTypes = () => {
  return (
    <div className={styles.container}>
      <h3>
        <span className={styles.title}>Let’s Sort Out</span>
        <br/>
        <span className={styles.description}>Your Waste Problem</span>
      </h3>
      <WasteTypesSlider/>
    </div>
  );
};

export default WasteTypes;