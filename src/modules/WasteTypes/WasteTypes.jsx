import React from 'react';
import WasteTypesSlider from '../WasteTypesSlider';
import styles from './WasteTypes.module.scss'

const WasteTypes = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Let’s Sort Out
        <span className={styles.description}>Your Waste Problem</span>
      </h2>
      <WasteTypesSlider/>
    </div>
  );
};

export default WasteTypes;