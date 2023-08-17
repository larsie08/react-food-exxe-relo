import React, { useContext } from 'react';
import ContentLoader from 'react-content-loader';

import { DishContext } from '../../../pages/Dish';

import styles from './ImgBlock.module.scss';

const ImgBlock = () => {
  const { isLoaded, dish } = useContext(DishContext);

  return (
    <div className={styles.img_block}>
      {isLoaded ? (
        <>
          <div className={styles.img_block__main}>
            <img src={dish.imageUrl} alt={dish.title} />
          </div>
          <div className={styles.img_block__mini}>
            <img src={dish.imageUrl} alt={dish.title} />
            <img src={dish.imageUrl} alt={dish.title} />
            <img src={dish.imageUrl} alt={dish.title} />
          </div>
        </>
      ) : (
        <ContentLoader
          speed={2}
          width={415}
          height={500}
          viewBox="0 0 415 500"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="0" y="0" rx="0" ry="0" width="415" height="315" />
          <rect x="0" y="325" rx="0" ry="0" width="125" height="90" />
          <rect x="150" y="325" rx="0" ry="0" width="125" height="90" />
          <rect x="300" y="325" rx="0" ry="0" width="125" height="90" />
        </ContentLoader>
      )}
    </div>
  );
};

export default ImgBlock;
