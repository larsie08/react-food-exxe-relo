import React, { useContext } from 'react';

import styles from './FoodCard.module.scss';

import { MenuContext } from '../../../pages/Menu';

const FoodCard = ({ id, price, title, imageUrl, onAddToCart }) => {
  const {itemIsAdded} = useContext(MenuContext);

  const obj = { id, parentId: id ,imageUrl, title, price };

  const onPlus = () => {
    onAddToCart(obj);
  }

  return (
    <div className={styles.food_card__content}>
      <a href="/">
        <img src={imageUrl} alt={title} />
      </a>
      <h4 className={styles.food_card__content__title}>{title}</h4>
      <div className={styles.food_card__content__price_block}>
        <h2>{price} ₽</h2>
        <button
          onClick={onPlus}
          className={itemIsAdded(id) ? styles.active_btn : ''}>
          {itemIsAdded(id) ? 'В корзине' : 'В корзину'}
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
