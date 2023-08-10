import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import { AppContext } from '../../App';

import NavigationMenu from '../../components/MenuComponents/NavigationMenu';
import { Footer } from '../../components/Footer';
import Categories from '../../components/MenuComponents/Categories';
import ImgBlock from '../../components/DishComponents/ImgBlock';
import MakeTastyBlock from '../../components/DishComponents/MakeTastyBlock';
import ContactsBlock from '../../components/InformationBlocks/ContactsBlock';

import styles from './Dish.module.scss';

const Dish = () => {
  const [counterValue, setCounterValue] = useState(1);
  const [makeTasty, setMakeTasty] = useState([]);

  const { items, itemIsAdded, onAddToCart } = useContext(AppContext);

  const param = useParams();

  const dish = items.find((item) => Number(item.id) === Number(param.id));

  const onPlus = () => {
    const obj = {
      id: dish.id,
      parentId: dish.id,
      imageUrl: dish.imageUrl,
      title: dish.title,
      price: dish.price,
    };
    onAddToCart(obj);
  };

  const onClick = (obj) => {
    const findItem = makeTasty.some((item) => Number(item.id) === Number(obj.id));
    if (findItem) {
      setMakeTasty(makeTasty.filter((item) => item.id !== obj.id));
    } else {
      setMakeTasty((prev) => [...prev, obj]);
    }
  };

  const isClicked = (id) => {
    return makeTasty.some((item) => Number(item.id) === Number(id));
  };

  const increase = () => {
    setCounterValue((count) => count + 1);
  };

  const decrease = () => {
    if (counterValue === 0) return;
    setCounterValue((count) => count - 1);
  };

  if (!dish) return null;

  return (
    <div className={styles.wrapper}>
      <NavigationMenu />
      <div className={styles.container}>
        <Categories />
        <div className={styles.content}>
          <ImgBlock dish={dish} />
          <div className={styles.content__dish_info}>
            <div className={styles.content__dish_info__title}>
              <h1>{dish.title}</h1>
            </div>
            <div className={styles.line} />
            <div className={styles.content__dish_info__price_block}>
              <div className={styles.price_block}>
                <div className={styles.price_block__title}>
                  <h2>{dish.price}₽</h2>
                </div>
                <div className={styles.price_block__gram}>
                  <h3>/</h3>
                  <p>400 грамм</p>
                </div>
              </div>
              <div className={styles.number_servings}>
                <h4>Количество порций:</h4>
                <div className={styles.number_servings__content_block}>
                  <div className={styles.number_servings__counter}>
                    <p>{counterValue}</p>
                    <div className={styles.svg_counter}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles.svg_up}
                        width="13"
                        height="28"
                        viewBox="0 0 11 24"
                        fill="none">
                        <path onClick={increase} d="M5.5 0.5L11 9.5H0L5.5 0.5Z" fill="#B59571" />
                        <path onClick={decrease} d="M5.5 23.5L11 14.5H0L5.5 23.5Z" fill="#B59571" />
                      </svg>
                    </div>
                  </div>
                  <div className={styles.number_servings__btn}>
                    <button
                      onClick={onPlus}
                      className={itemIsAdded(dish.id) ? styles.active_btn : ''}>
                      {itemIsAdded(dish.id) ? 'В корзине' : 'В корзину'}
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.line} />
              <MakeTastyBlock
                makeTasty={makeTasty}
                onClick={(obj) => onClick(obj)}
                isClicked={isClicked}
              />
            </div>
          </div>
        </div>
        <ContactsBlock />
      </div>
      <Footer renderMenu={true} />
    </div>
  );
};

export default Dish;
