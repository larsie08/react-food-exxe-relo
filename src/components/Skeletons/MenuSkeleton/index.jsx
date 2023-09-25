import React, { useContext } from "react";
import ContentLoader from "react-content-loader";

import styles from "./MenuSkeleton.module.scss";

import { AppContext } from "../../../App";

const MenuSkeleton = () => {
  const { isDarkTheme } = useContext(AppContext);

  return (
    <ContentLoader
      className={styles.content}
      speed={2}
      width={290}
      height={460}
      viewBox="0 0 290 460"
      backgroundColor={isDarkTheme ? "#545454" : "#d6d6d6"}
      foregroundColor="#ecebeb"
    >
      <rect className={styles.image} y="0" x="0" rx="0" ry="0" />
      <rect className={styles.title} y="250" x="0" rx="0" ry="0" />
      <rect className={styles.price} y="360" x="0" rx="0" ry="0" />
      <rect x="170" y="360" rx="0" ry="0" width="120" height="45" />
    </ContentLoader>
  );
};

export default MenuSkeleton;
