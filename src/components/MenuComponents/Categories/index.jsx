import React, { useContext } from "react";

import { AppContext } from "../../../App";

import styles from "./Categories.module.scss";
import classNames from "classnames";

const categories = [
  "Завтраки",
  "Raw",
  "Холодные закуски",
  "Брускетты",
  "К вину",
  "Салаты",
  "Супы",
  "Паста и ризотто",
  "Мясо",
  "Рыба",
  "Grill",
  "Мангал",
  "Гарниры",
];

const Categories = () => {
  const { categoryId, setCategoryId } = useContext(AppContext);

  return (
    <nav className={styles.categories}>
      <ul className={styles.categories__content}>
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => setCategoryId(i)}
            className={classNames(styles.categories__content__btn, {
              [styles.categories__content__btn__active]: categoryId === i,
            })}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Categories;
