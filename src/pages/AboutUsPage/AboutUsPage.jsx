import React from 'react';

import styles from './AboutUsPage.module.scss';

import aboutUsImg from './../../images/about-us/about-us.jpg';
import whatWeDoImg from './../../images/about-us/what-we-do.jpg';
import bgImage from '../../images/aboutUsBackground.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';

const AboutUsPage = () => {
  return (
    <main>
      <div className={'container'}>
        <div className={styles.container}>
          <img src={aboutUsImg} alt='aboutUsImg' />
          <div className={styles.textBlock}>
            <h3>About Us</h3>
            <p>
              Go Eco has founded in 2022, it is the technology tool in the world to improve environmental sustainability
              and help customers find locations to recycle various types of items, helping make the planet a greener,
              more sustainable place.
            </p>
            <p>
              By setting location, Go Eco enables them to find the nearest recycling drop-off spots and special waste
              facilities nearest them. The app has a user-friendly search functionality that allows easy searching for
              items where users can type the item in or browse through the main categories on the home page to learn
              whether an item is recyclable and compostable.
            </p>
            <p>
              Go Eco is the ultimate system to bring recyclers and consumers together!
            </p>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.textBlock}>
            <h3>What Do We Do</h3>
            <p>- the app has user-friendly search functionality that allows customers to find the nearest locations to
              recycle various types of items,</p>
            <p>- the app has information about the types of waste each eco service accepts, payment conditions, delivery
              options and rating of the service,</p>
            <p>- the app gives customers an opportunity to ask questions and live feedback,</p>
            <p>- the app has information about different types of waste with recommendations on how to define each type
              and photo examples of each type,</p>
            <p>- GoEco helps to make the planet a greener, more sustainable and healthy place. </p>
          </div>
          <img src={whatWeDoImg} alt='aboutUsImg' />
        </div>
      </div>

      <div className={styles.bgWasteContainer} style={{ backgroundImage: `url(${bgImage})` }}>

        <div className={'container'}>
          <div className={styles.wasteContainer}>
            <h3>Zero Waste Lifestyle tips</h3>
            <p>Sorting waste has an impact way beyond our kitchens, garbage bins and even communities. Properly sorting
              waste means that less ends up in landfills and more of what we throw away can be reused and recycled.
            </p>
            <p>So many decisions we make in our everyday lives have a major impact on the planet. The average American
              produces about 4.4 pounds of trash per day. Explore our tips for ways you can make small changes that are
              eco-friendly and will have a lasting effect on the environment.</p>
          </div>

          <div className={styles.cardContainer}>

            <div className={styles.cardBlocks}>
              <div className={styles.wasteCard}>
                <p>Shop eco-friendly with reusable bags</p>
                <p>Reusable grocery bags can significantly help reduce the number of plastic bags collected in our
                  landfills.</p>
              </div>
              <div className={styles.wasteCard}>
                <p> Use disposables in the kitchen</p>
                <p>Sure, plastic wrap, tin foil, paper towels and plastic zip bags may be convenient – but they create a
                  lot of waste. Try using a silicone baking sheet in place of tinfoil or parchment. When cleaning, swap
                  out paper towels and single-use wipes for microfibre cloths you can wash and reuse. Reusable lunch
                  containers and washable snack bags will keep your food just as fresh and will minimize the amount of
                  trash coming from your household on a day-to-day basis.</p>
              </div>
              <div className={styles.wasteCard}>
                <p>Say no to disposable water bottles and coffee cups</p>
                <p>Contrary to popular belief, disposable coffee cups are not recyclable, due to the inside coating they
                  have. For coffee on the go, use a travel mug. It's just as convenient, and it can save you money
                  too!</p>
              </div>
              <div className={styles.wasteCard}>
                <p> Reduce food waste</p>
                <p>Before putting food to the trash, ask yourself if it is so far gone that you really need to throw it
                  out. Take the habit of noting the expiry dates of food in your fridge and planning your meals
                  accordingly. If food goes bad, compost it! Composting transforms organic waste into nutrient-rich
                  soil.</p>
              </div>
            </div>


            <div className={styles.cardBlocks}>
              <div className={styles.wasteCard}>
                <p>Join buy-and-sell groups</p>
                <p>There are dozens of online buy-and-sell web sites. Yes, someone could be interested in that blender
                  that you never used, the skates too tight for your kid or the pine coffee table in the basement –
                  they'll even pick it up and pay you in cash!</p>
              </div>
              <div className={styles.wasteCard}>
                <p>Try a new way to buy (and sell) clothes</p>
                <p>Need some new clothes? Why not check out your nearest second-hand store? And while you're at it, the
                  clothes you no longer use could be perfectly wearable for someone else. Try donating them to
                  consignment
                  or thrift shops, swapping clothes with friends, or even repurposing them as cloths and rags.</p>
              </div>
              <div className={styles.wasteCard}>
                <p>Find a new home for old furniture</p>
                <p>Why not give your old furniture a new home? Donate it to a local charity, put it on the curb with a
                  "free" sign on it, or post an online ad to sell it or give it away. Some donation centres even offer
                  pickup services for used furniture.</p>
              </div>
              <div className={styles.wasteCard}>
                <p>Dispose of e-waste responsibly</p>
                <p>Old computers, TVs and other devices are placing an increasing burden. These devices have components
                  that can contain potentially harmful chemicals, so before you put your e-waste at the curb, find out
                  if
                  the manufacturer has drop-off programs, or find recycling programs in your province.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
    ;
};

export default AboutUsPage;