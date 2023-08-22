import React from 'react';

import styles from './Home.module.scss';

import Navigation from '../../components/Navigation';
import AboutBlock from '../../components/InformationBlocks/AboutBlock';
import MenuBlock from '../../components/InformationBlocks/MenuBlock';
import DeliveryBlock from '../../components/InformationBlocks/DeliveryBlock';
import ContactsBlock from '../../components/InformationBlocks/ContactsBlock';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Navigation />
      <img className={styles.intro} src="./img/intro.png" alt="Фон" />
      <div className={styles.container}>
        <div className={styles.main}>
          <h1 className={styles.main__title}>
            Видовой ресторан Food Exxe Relo <br /> на Крестовском острове
          </h1>
        </div>
        <AboutBlock />
        <MenuBlock />
        <DeliveryBlock />
        <ContactsBlock />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
