import React, { useContext, useEffect, useState } from 'react';

import { AppContext } from '../../../App';
import { DishContext } from '../../../pages/Dish';

import styles from './DishPrice.module.scss';

const DishPrice = () => {
  const { param, dish, makeTasty, onPlus } = useContext(DishContext);
  const { itemIsAdded } = useContext(AppContext);

  const [dishPrice, setDishPrice] = useState(dish.price);
  const [counterValue, setCounterValue] = useState(dish.volume);

  useEffect(() => {
    try {
      if (dish.isCart) {
        setDishPrice(dish.price);
      } else if (makeTasty.length >= 1) {
        const result = makeTasty.reduce(
          (sum, item) => Number((sum += item.price)),
          Number(dish.price),
        );
        setDishPrice(result * counterValue);
      } else {
        setDishPrice(dish.price * counterValue);
      }
    } catch (error) {
      alert('Не удалось вывести цену');
      console.error(error);
    }
  }, [counterValue, dish.isCart, dish.price, dishPrice, makeTasty]);

  const isClicked = () => {
    const obj = {
      id: dish.id,
      parentId: param.id,
      imageUrl: dish.imageUrl,
      title: dish.title,
      price: dishPrice,
      volume: counterValue,
      makeTastyId: makeTasty,
      isCart: true,
    };
    onPlus(obj);
  };

  const handleChange = (event) => {
    if (event.target.value.length > 2) {
      event.target.value = counterValue;
    }
    if (event.target.value < 0) return;
    setCounterValue(Number(event.target.value));
  };

  const increase = () => {
    if (counterValue === 10) return;
    setCounterValue((count) => count + 1);
  };

  const decrease = () => {
    if (counterValue === 0) return;
    setCounterValue((count) => count - 1);
  };

  return (
    <>
      <div className={styles.price_block}>
        <div className={styles.price_block__title}>
          <h2>{dishPrice}₽</h2>
        </div>
        <div className={styles.price_block__gram}>
          <h3>/</h3>
          <p>400 грамм</p>
        </div>
      </div>
      <div className={styles.number_servings}>
        <h4>Количество порций:</h4>
        <div className={styles.number_servings__content_block}>
          <div className={styles.number_servings__counter}>
            <input
              key={counterValue}
              name="number"
              type="number"
              defaultValue={counterValue}
              onChange={handleChange}
              autoFocus
            />
            <div className={styles.svg_counter}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.svg_up}
                width="18"
                height="36"
                viewBox="0 0 11 24"
                fill="none">
                <path onClick={increase} d="M5.5 0.5L11 9.5H0L5.5 0.5Z" fill="#B59571" />
                <path onClick={decrease} d="M5.5 23.5L11 14.5H0L5.5 23.5Z" fill="#B59571" />
              </svg>
            </div>
          </div>
          <div className={styles.number_servings__btn}>
            <button
              onClick={isClicked}
              className={itemIsAdded(dish.parentId) ? styles.active_btn : ''}>
              {itemIsAdded(dish.parentId) ? 'В корзине' : 'В корзину'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DishPrice;
