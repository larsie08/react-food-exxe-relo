import React, { useContext } from "react";

import ContentLoader from "react-content-loader";

import styles from "./MakeTastySkeletonBlock.module.scss";

import { AppContext } from "../../../../App";

const MakeTastySkeletonBlock = () => {
  const { isDarkTheme } = useContext(AppContext);

  return (
    <div className={styles.wrapper}>
      <ContentLoader
        className={styles.make_tasty_block}
        speed={2}
        backgroundColor={isDarkTheme ? "#545454" : "#d6d6d6"}
        foregroundColor="#ecebeb"
      >
        <rect
          className={styles.make_tasty_block__title}
          x="0"
          y="25"
          rx="0"
          ry="0"
        />
        <rect
          className={styles.make_tasty_block__content}
          x="0"
          y="115"
          rx="0"
          ry="0"
        />
        <rect
          className={styles.make_tasty_block__price}
          x="0"
          y="155"
          rx="0"
          ry="0"
        />
        <rect
          className={styles.make_tasty_block__button}
          x="315"
          y="135"
          rx="0"
          ry="0"
        />
        <rect
          className={styles.make_tasty_block__content}
          x="0"
          y="215"
          rx="0"
          ry="0"
        />
        <rect
          className={styles.make_tasty_block__price}
          x="0"
          y="255"
          rx="0"
          ry="0"
        />
        <rect
          className={styles.make_tasty_block__button}
          x="315"
          y="235"
          rx="0"
          ry="0"
        />
        <rect
          className={styles.make_tasty_block__content}
          x="0"
          y="315"
          rx="0"
          ry="0"
        />
        <rect
          className={styles.make_tasty_block__price}
          x="0"
          y="355"
          rx="0"
          ry="0"
        />
        <rect
          className={styles.make_tasty_block__button}
          x="315"
          y="335"
          rx="0"
          ry="0"
        />
        <rect
          className={styles.make_tasty_block__content}
          x="0"
          y="415"
          rx="0"
          ry="0"
        />
        <rect
          className={styles.make_tasty_block__price}
          x="0"
          y="455"
          rx="0"
          ry="0"
        />
        <rect
          className={styles.make_tasty_block__button}
          x="315"
          y="435"
          rx="0"
          ry="0"
        />
      </ContentLoader>
    </div>
  );
};

export default MakeTastySkeletonBlock;
