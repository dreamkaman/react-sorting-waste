import React from 'react';

import styles from './AboutUsPage.module.scss';

import aboutUsImg from './../../images/about-us/about-us.jpg';
import whatWeDoImg from './../../images/about-us/what-we-do.jpg';

const AboutUsPage = () => {
  return (
    <main>
      <div className={'container'}>
        <div className={styles.container}>
          <img src={aboutUsImg} alt='aboutUsImg' />
          <div className={styles.textBlock}>
            <h3>About Us</h3>
            <p>
              Go Eco has founded in 2022, it is the technology tool in the world to improve environmental sustainability and help customers find locations to recycle various types of items, helping make the planet a greener, more sustainable place.
            </p>
            <p>
              By setting location, Go Eco enables them to find the nearest recycling drop-off spots and special waste facilities nearest them. The app has a user-friendly search functionality that allows easy searching for items where users can type the item in or browse through the main categories on the home page to learn whether an item is recyclable and compostable.
            </p>
            <p>
              Go Eco is the ultimate system to bring recyclers and consumers together!
            </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <h3>What Do We Do</h3>
          <p>- the app has user-friendly search functionality that allows  customers to find the nearest locations to recycle various types of items,</p>
          <p>- the app has information about the types of waste each eco service accepts, payment conditions, delivery options and rating of the service,</p>
          <p>- the app gives customers an opportunity to ask questions and live feedback,</p>
          <p>- the app has information about different types of waste with recommendations on how to define each type and photo examples of each type,</p>
          <p>- GoEco helps to make the planet a greener, more sustainable and healthy place. </p>
        </div>
        <img src={whatWeDoImg} alt='aboutUsImg' />
      </div>
    </div>
</main>
)
  ;
};

export default AboutUsPage;