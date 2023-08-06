import React from 'react';

import styles from './MakeTastyBlock.module.scss';

const MakeTastyBlock = () => {
  return (
    <div className={styles.content}>
      <h1>Сделать еще вкуснее</h1>
      <div className={styles.content__ingredients_block}>
        <div className={styles.ingredient_block}>
          <div className={styles.ingredient_block__content}>
            <h2>Тигровые креветки 60 г</h2>
            <p>450 ₽</p>
          </div>
          <div className={styles.ingredient_block__btn}></div>
        </div>
        <div className={styles.ingredient_block}>
          <div className={styles.ingredient_block__content}>
            <h2>Томаты / паприка</h2>
            <p>80 ₽</p>
          </div>
          <div className={styles.ingredient_block__btn}></div>
        </div>
        <div className={styles.ingredient_block}>
          <div className={styles.ingredient_block__content}>
            <h2>Бекон</h2>
            <p>120 ₽</p>
          </div>
          <div className={styles.ingredient_block__btn}></div>
        </div>
        <div className={styles.ingredient_block}>
          <div className={styles.ingredient_block__content}>
            <h2>Сыр чеддер 30 г</h2>
            <p>80 ₽</p>
          </div>
          <div className={styles.ingredient_block__btn}></div>
        </div>
      </div>
    </div>
  );
};

export default MakeTastyBlock;
