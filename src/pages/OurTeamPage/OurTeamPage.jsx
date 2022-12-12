import React from 'react';

import styles from './OurTeamPage.module.scss';

import { dataPeople } from './dataOurTeam';
import classnames from 'classnames';

const OurTeamPage = () => {
  return (
    <main>
      <div className={classnames('container', styles.generalContainer)}>
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <h6 id="title">Meet Our Team</h6>
            <p>
              We are high motivated, hardworking, creative and organized team of junior IT
              specialist with strong skills. Our team includes a product owner, a scrum master, a
              product designer, a software architect, software developers, software testing
              engineers and copywriter as well.
            </p>
          </div>
          <div className={styles.peopleContainer}>
            {dataPeople.map((card) => (
              <div key={card.id} className={styles.card}>
                <img src={card.image} alt={card.name} />
                <p>{card.name}</p>
                <p>{card.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurTeamPage;
