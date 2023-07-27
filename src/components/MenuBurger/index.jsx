import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

import classNames from 'classnames';

import { AppContext } from '../../App';

import styles from './MenuBurger.module.scss';

const MenuBurger = () => {
  const { isOpenBurger, setIsOpenBurger, setIsOpenModal } = React.useContext(AppContext);

  return ReactDOM.createPortal (
    <div className={classNames(styles.menu_burger, { [styles.menu_burger__active]: isOpenBurger })}>
      <div
        className={classNames(styles.menu_burger__content, {
          [styles.menu_burger__content__active]: isOpenBurger,
        })}>
        <ul onClick={() => setIsOpenBurger(false)} className={styles.menu_burger__content__header}>
          <li className={styles.logo}>
            <img alt="logo" src="./img/logo.png" />
          </li>
          <li>
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
              <button onClick={() => setIsOpenModal(true)} href="/">
                Бронь столика
              </button>
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
    </div>,
    document.getElementById('portal'),
  );
};

export default MenuBurger;
