import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../../../App';
import { MenuContext } from '../../../pages/Menu';

import styles from './FoodCard.module.scss';

const FoodCard = ({ id, price, title, imageUrl, }) => {
  const {itemIsAdded} = useContext(AppContext);
  const {onAddToCart} = useContext(MenuContext)

  const onPlus = () => {
    const obj = { id, parentId: id ,imageUrl, title, price, volume: 1, makeTastyId: [] };
    onAddToCart(obj);
  }

  return (
    <div className={styles.food_card__content}>
      <Link to={`dish/${id}`}>
        <img src={imageUrl} alt={title} />
      </Link>
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
