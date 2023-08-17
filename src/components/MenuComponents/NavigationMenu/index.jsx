import React, { useContext } from 'react';

import styles from './NavigationMenu.module.scss';
import { AppContext } from '../../../App';

const NavigationMenu = () => {
  const { cartItems } = useContext(AppContext);

  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  return (
    <header className={styles.header}>
      <ul className={styles.header__content}>
        <li className={styles.header__content__account}>
          <a href="/">Личный кабинет</a>
          <a href="/">
            <img alt="account" src="./img/account.png" />
          </a>
        </li>
        <li className={styles.header__content__cart}>
          <a href="/">
            <img alt="cart" src="./img/shopping-basket.png" />
          </a>
          <span>{totalPrice} ₽</span>
        </li>
      </ul>
    </header>
  );
};

export default NavigationMenu;
