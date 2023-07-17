import React from 'react';

import styles from './FoodCard.module.scss';

const FoodCard = () => {
  return (
    <div className={styles.food_card}>
      <div className={styles.food_card__content}>
        <a href="/">
          <img src="./img/food card/friedEggs.png" alt="Яичница-глазунья из трех яиц" />
        </a>
        <h4 className={styles.food_card__content__title}>Яичница-глазунья из трех яиц</h4>
        <div className={styles.food_card__content__price_block}>
          <h2>250 ₽</h2>
          <button href="/">
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
