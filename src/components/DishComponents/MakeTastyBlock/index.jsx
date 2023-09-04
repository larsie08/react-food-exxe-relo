import React, { useContext } from "react";

import { DishContext } from "../../../pages/Dish";

import styles from "./MakeTastyBlock.module.scss";

const ingredients = [
  { title: "Тигровые креветки 60 г", price: 450 },
  { title: "Томаты / паприка", price: 80 },
  { title: "Бекон", price: 120 },
  { title: "Сыр чеддер 30 г", price: 80 },
];

const MakeTastyBlock = () => {
  const { isClicked, onClick } = useContext(DishContext);

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
            <div
              onClick={() => onClicked(item, id)}
              className={styles.ingredient_block__btn}
            >
              {isClicked(id) && (
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 1920 1920"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1743.858 267.012 710.747 1300.124 176.005 765.382 0 941.387l710.747 710.871 1209.24-1209.116z"
                    fillRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MakeTastyBlock;
