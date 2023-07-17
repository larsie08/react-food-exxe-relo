import React from 'react';

import styles from './Categories.module.scss';

const Categories = ({ value, setCategoryId }) => {
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
              value === i
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
