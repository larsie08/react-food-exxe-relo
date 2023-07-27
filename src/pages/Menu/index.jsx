import React from 'react';
import axios from 'axios';

import NavigationMenu from '../../components/MenuComponents/NavigationMenu';
import Categories from '../../components/MenuComponents/Categories';
import ContactsBlock from '../../components/InformationBlocks/ContactsBlock';
import { Footer } from '../../components/Footer';
import FoodCard from '../../components/MenuComponents/FoodCard';

import styles from './Menu.module.scss';

const Menu = () => {
  const [categoryId, setCategoryId] = React.useState(0);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const itemsResponse = await axios.get('https://64c180cafa35860baea09f01.mockapi.io/items');

        setItems(itemsResponse.data);
      } catch (err) {
        alert('Ошибка при запросе данных ;(');
        console.log(err);
      }
    }

    fetchData();
  }, []);

  return (
    <div className={styles.wrapper}>
      <NavigationMenu />
      <div className={styles.container}>
        <Categories value={categoryId} setCategoryId={setCategoryId} />
        <div className={styles.food_card__wrapper}>
          {items.map((item, id) => (
            <FoodCard key={id} title={item.title} imageUrl={item.imageUrl} price={item.price} />
          ))}
        </div>
        <ContactsBlock />
      </div>
      <Footer renderMenu={true} />
    </div>
  );
};

export default Menu;
