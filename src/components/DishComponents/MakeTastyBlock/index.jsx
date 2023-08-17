import React, { useContext } from 'react';

import { DishContext } from '../../../pages/Dish';

import styles from './MakeTastyBlock.module.scss';

const MakeTastyBlock = () => {
  const { isClicked, onClick } = useContext(DishContext);

  const ingredients = [
    { title: 'Тигровые креветки 60 г', price: 450 },
    { title: 'Томаты / паприка', price: 80 },
    { title: 'Бекон', price: 120 },
    { title: 'Сыр чеддер 30 г', price: 80 },
  ];

  const onClicked = (item, id) => {
    const obj = { id, price: item.price };
    onClick(obj);
  };

  return (
    <div className={styles.content}>
      <h1>Сделать еще вкуснее</h1>
      <div className={styles.content__ingredients_block}>
        {ingredients.map((item, id) => (
          <div key={id} className={styles.ingredient_block}>
            <div className={styles.ingredient_block__content}>
              <h2>{item.title}</h2>
              <p>{item.price} ₽</p>
            </div>
            <div onClick={() => onClicked(item, id)} className={styles.ingredient_block__btn}>
              {isClicked(id) ? <img src="./img/mark.png" alt="mark" /> : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MakeTastyBlock;
