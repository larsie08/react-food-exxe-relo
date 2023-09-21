import React, { createContext, useContext } from "react";

import NavigationMenu from "../../components/MenuComponents/NavigationMenu";
import Categories from "../../components/MenuComponents/Categories";
import ContactsBlock from "../../components/InformationBlocks/ContactsBlock";
import Footer from "../../components/Footer";
import FoodCard from "../../components/MenuComponents/FoodCard";
import Pagination from "../../components/Pagination";

import { AppContext } from "../../App";

import styles from "./Menu.module.scss";
import MenuSkeleton from "../../components/Skeletons/MenuSkeleton";

export const MenuContext = createContext();

const Menu = () => {
  const { cartItems, items, onAddToCart, isLoading } = useContext(AppContext);

  const skeletons = [...new Array(4)].map((_, index) => (
    <MenuSkeleton key={index} />
  ));

  return (
    <MenuContext.Provider value={{ cartItems, onAddToCart }}>
      <div className={styles.wrapper}>
        <NavigationMenu />
        <div className={styles.container}>
          <Categories />
          <div className={styles.food_card__wrapper}>
            {isLoading
              ? skeletons
              : items.map((item, id) => (
                  <FoodCard key={id} id={item.id} {...item} />
                ))}
            {/* {items.map((item, id) => (
              <FoodCard key={id} id={item.id} {...item} />
            ))} */}
          </div>
          <Pagination />
          <ContactsBlock />
        </div>
        <Footer renderMenu={true} />
      </div>
    </MenuContext.Provider>
  );
};

export default Menu;
