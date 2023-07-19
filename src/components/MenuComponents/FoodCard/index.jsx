import React from 'react';

import styles from './FoodCard.module.scss';

const FoodCard = ({ price, title, imageUrl }) => {
  return (
    <div className={styles.food_card__content}>
      <a href="/">
        <img src={imageUrl} alt={title} />
      </a>
      <h4 className={styles.food_card__content__title}>{title}</h4>
      <div className={styles.food_card__content__price_block}>
        <h2>{price} ₽</h2>
        <button href="/">В корзину</button>
      </div>
    </div>
  );
};

export default FoodCard;
