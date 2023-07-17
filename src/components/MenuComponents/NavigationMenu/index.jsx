import React from 'react';

import styles from './NavigationMenu.module.scss';

const NavigationMenu = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.header__content}>
        <li className={styles.header__content__account}>
          <a href="/">
            Личный кабинет
          </a>
          <a href="/">
            <img alt="account" src="./img/account.png" />
          </a>
        </li>
        <li className={styles.header__content__cart}>
          <a href="/">
            <img alt="cart" src="./img/shopping-basket.png" />
          </a>
          <span>0 ₽</span>
        </li>
      </ul>
    </header>
  );
};

export default NavigationMenu;
