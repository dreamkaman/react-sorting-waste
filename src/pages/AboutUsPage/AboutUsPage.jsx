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
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p>
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
              Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <h3>What We Do</h3>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
        </div>
        <img src={whatWeDoImg} alt='aboutUsImg' />
      </div>
    </div>
</main>
)
  ;
};

export default AboutUsPage;