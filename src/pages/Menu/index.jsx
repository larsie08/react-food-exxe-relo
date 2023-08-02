import React, { useState, createContext } from 'react';
import axios from 'axios';

import NavigationMenu from '../../components/MenuComponents/NavigationMenu';
import Categories from '../../components/MenuComponents/Categories';
import ContactsBlock from '../../components/InformationBlocks/ContactsBlock';
import { Footer } from '../../components/Footer';
import FoodCard from '../../components/MenuComponents/FoodCard';

import styles from './Menu.module.scss';

export const MenuContext = createContext();

const Menu = () => {
  const [categoryId, setCategoryId] = useState(0);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const itemsResponse = await axios.get('https://64c180cafa35860baea09f01.mockapi.io/items');
        const cartResponse = await axios.get(
          'https://64c180cafa35860baea09f01.mockapi.io/cartItems',
        );

        setItems(itemsResponse.data);
        setCartItems(cartResponse.data);
      } catch (error) {
        alert('Ошибка при запросе данных ;(');
        console.error();
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://64c180cafa35860baea09f01.mockapi.io/cartItems/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        await axios.post('https://64c180cafa35860baea09f01.mockapi.io/cartItems', obj);
      }
    } catch (error) {
      alert('Не удалось добавить в корзину');
      console.error();
    }
  };

  const itemIsAdded = (id) => {
    return cartItems.some((item) => Number(item.parentId) === Number(id));
  };

  return (
    <MenuContext.Provider value={{ onAddToCart, itemIsAdded, cartItems }}>
      <div className={styles.wrapper}>
        <NavigationMenu/>
        <div className={styles.container}>
          <Categories value={categoryId} setCategoryId={setCategoryId} />
          <div className={styles.food_card__wrapper}>
            {items.map((item, id) => (
              <FoodCard key={id} id={item.id} onAddToCart={(obj) => onAddToCart(obj)} {...item} />
            ))}
          </div>
          <ContactsBlock />
        </div>
        <Footer renderMenu={true} />
      </div>
    </MenuContext.Provider>
  );
};

export default Menu;
