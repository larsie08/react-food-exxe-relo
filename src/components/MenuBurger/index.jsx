import React from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../../App';

import styles from './MenuBurger.module.scss';

const MenuBurger = () => {
    const {setIsOpenBurger, setIsOpenModal} = React.useContext(AppContext);

  return (
    <div className={styles.menu_burger}>
      <div className={styles.menu_burger__content}>
        <ul className={styles.menu_burger__content__header}>
          <li onClick={() => setIsOpenBurger(false)} className={styles.logo}>
            <img alt="logo" src="./img/logo.png" />
          </li>
          <li onClick={() => setIsOpenBurger(false)}>
            <img alt="close" src="./img/mini-close.png" />
          </li>
        </ul>

        <div className={styles.menu_burger__content__middle}>
          <ul className={styles.content}>
            <li>
              <Link to="menu">Меню</Link>
            </li>
            <li>
              <a href="/">Доставка</a>
            </li>
            <li>
              <a href="/">Оплата</a>
            </li>
            <li>
              <button onClick={() => setIsOpenModal(true)} href="/">Бронь столика</button>
            </li>
          </ul>
        </div>

        <div className={styles.menu_burger__content__footer}>
          <ul>
            <li>
              <img alt="yt-icon" src="./img/yt-icons.png" />
            </li>
            <li>
              <img alt="vk-icon" src="./img/vk-icons.png" />
            </li>
            <li>
              <img alt="tg-icon" src="./img/tg-icons.png" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuBurger;
