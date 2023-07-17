import React from 'react';

import NavigationMenu from '../../components/MenuComponents/NavigationMenu';
import Categories from '../../components/MenuComponents/Categories';
import ContactsBlock from '../../components/InformationBlocks/ContactsBlock';
import Footer from '../../components/Footer';
import FoodCard from '../../components/MenuComponents/FoodCard';

import styles from './Menu.module.scss';

const Menu = () => {
  const [categoryId, setCategoryId] = React.useState(0);

  return (
    <div className={styles.wrapper}>
      <NavigationMenu />
      <div className={styles.container}>
        <Categories value={categoryId} setCategoryId={setCategoryId} />
        <FoodCard />

        {/* <ContactsBlock /> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Menu;
