import React from 'react';

import styles from './ImgBlock.module.scss';

const ImgBlock = ({dish}) => {
  return (
    <div className={styles.img_block}>
      <div className={styles.img_block__main}>
        <img src={dish.imageUrl} alt={dish.title} />
      </div>
      <div className={styles.img_block__mini}>
        <img src={dish.imageUrl} alt={dish.title} />
        <img src={dish.imageUrl} alt={dish.title} />
        <img src={dish.imageUrl} alt={dish.title} />
      </div>
    </div>
  );
};

export default ImgBlock;
