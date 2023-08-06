import React, { useContext } from 'react';

import { AppContext } from '../../../App';

import styles from './Categories.module.scss';

const Categories = () => {
  const { categoryId, setCategoryId } = useContext(AppContext);

  const categories = [
    'Завтраки',
    'Raw',
    'Холодные закуски',
    'Брускетты',
    'К вину',
    'Салаты',
    'Супы',
    'Паста и ризотто',
    'Мясо',
    'Рыба',
    'Grill',
    'Мангал',
    'Гарниры',
  ];

  return (
    <nav className={styles.categories}>
      <ul className={styles.categories__content}>
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => setCategoryId(i)}
            className={
              categoryId === i
                ? styles.categories__content__btn__active
                : styles.categories__content__btn
            }>
            {categoryName}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Categories;
