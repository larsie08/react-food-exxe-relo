import React, { useContext } from "react";
import ContentLoader from "react-content-loader";

import { DishContext } from "../../../pages/Dish";

import styles from "./ImgBlock.module.scss";

const ImgBlock = () => {
  const { isLoaded, dish } = useContext(DishContext);

  const smallImg = (
    <div className={styles.img_block__mini}>
      <img src={dish.imageUrl} alt={dish.title} />
      <img src={dish.imageUrl} alt={dish.title} />
      <img src={dish.imageUrl} alt={dish.title} />
    </div>
  );

  return (
    <div className={styles.img_block}>
      <div className={styles.img_block__main}>
        <img src={dish.imageUrl} alt={dish.title} />
      </div>
      {smallImg}
    </div>
  );
};

export default ImgBlock;
