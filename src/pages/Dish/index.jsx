import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import { AppContext } from "../../App";

import NavigationMenu from "../../components/MenuComponents/NavigationMenu";
import Footer from "../../components/Footer";
import Categories from "../../components/MenuComponents/Categories";
import ImgBlock from "../../components/DishComponents/ImgBlock";
import MakeTastyBlock from "../../components/DishComponents/MakeTastyBlock";
import ContactsBlock from "../../components/InformationBlocks/ContactsBlock";
import DishPrice from "../../components/DishComponents/DishPrice";
import DishSkeletonPage from "../DishSkeletonPage";

import styles from "./Dish.module.scss";

export const DishContext = React.createContext();

const Dish = () => {
  const { onAddToCart, cartItems } = useContext(AppContext);
  const [makeTasty, setMakeTasty] = useState([]);
  const [dish, setDish] = useState();
  const [width, setWidth] = useState(window.innerWidth);

  const breakpoint = 820;

  const param = useParams();

  useEffect(() => {
    const findItem = cartItems.find(
      (item) => Number(item.parentId) === Number(param.id)
    );
    if (findItem) {
      setDish(findItem);
      setMakeTasty(findItem.makeTastyId);
    } else {
      async function fetchDish() {
        try {
          const { data } = await axios.get(
            `https://64c180cafa35860baea09f01.mockapi.io/items/${param.id}`
          );
          setDish(data);
        } catch (error) {
          alert("Не удалось получить блюдо");
          console.log(error);
        }
      }
      fetchDish();
    }

    const handleResizeWindow = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [cartItems, param]);

  if (!dish) return <DishSkeletonPage />;

  const onPlus = (obj) => {
    onAddToCart(obj);
  };

  const onClick = (obj) => {
    const findItem = makeTasty.some(
      (item) => Number(item.id) === Number(obj.id)
    );
    if (findItem) {
      setMakeTasty(makeTasty.filter((item) => item.id !== obj.id));
    } else {
      setMakeTasty((prev) => [...prev, obj]);
    }
  };

  const isClicked = (id) => {
    return makeTasty.some((item) => Number(item.id) === Number(id));
  };

  return (
    <DishContext.Provider
      value={{ param, dish, makeTasty, isClicked, onPlus, onClick }}
    >
      <div className={styles.wrapper}>
        <NavigationMenu />
        <div className={styles.container}>
          <Categories />
          <div className={styles.content}>
            {width > breakpoint && <ImgBlock />}
            <div className={styles.content__dish_info}>
              <div className={styles.content__dish_info__title}>
                <h1>{dish.title}</h1>
              </div>
              <div className={styles.line} />
              {width <= breakpoint && <ImgBlock />}
              <div className={styles.content__dish_info__price_block}>
                <DishPrice />
                <div className={styles.line} />
                <MakeTastyBlock />
              </div>
            </div>
          </div>
          <ContactsBlock />
        </div>
        <Footer renderMenu={true} />
      </div>
    </DishContext.Provider>
  );
};

export default Dish;
