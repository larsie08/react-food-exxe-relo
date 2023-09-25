import React, { useContext } from "react";

import ContentLoader from "react-content-loader";

import styles from "./DishSkeletonContent.module.scss";

import { AppContext } from "../../../../App";

const DishSkeletonContent = () => {
  const { isDarkTheme } = useContext(AppContext);

  return (
    <div className={styles.price_block}>
      <ContentLoader
        className={styles.content}
        speed={2}
        backgroundColor={isDarkTheme ? "#545454" : "#d6d6d6"}
        foregroundColor="#ecebeb"
      >
        <rect className={styles.price} x="0" y="40" rx="0" ry="0" />
        <rect className={styles.number_servings} x="0" y="135" rx="0" ry="0" />
        <rect className={styles.counter_button} x="0" y="180" rx="0" ry="0" />
      </ContentLoader>
    </div>
  );
};

export default DishSkeletonContent;
