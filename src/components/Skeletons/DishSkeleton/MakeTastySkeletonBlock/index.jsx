import React, { useContext } from "react";

import ContentLoader from "react-content-loader";

import styles from "./MakeTastySkeletonBlock.module.scss";

import { AppContext } from "../../../../App";

const skeletons = [
  { content: 115, price: 155, button: 135 },
  { content: 215, price: 255, button: 235 },
  { content: 315, price: 355, button: 335 },
  { content: 415, price: 455, button: 435 },
];

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

        {skeletons.map((item, id) => (
          <>
            <rect
              className={styles.make_tasty_block__content}
              key={id}
              x="0"
              y={item.content}
              rx="0"
              ry="0"
            />
            <rect
              className={styles.make_tasty_block__price}
              x="0"
              y={item.price}
              rx="0"
              ry="0"
            />
            <rect
              className={styles.make_tasty_block__button}
              x="315"
              y={item.button}
              rx="0"
              ry="0"
            />
          </>
        ))}
      </ContentLoader>
    </div>
  );
};

export default MakeTastySkeletonBlock;
