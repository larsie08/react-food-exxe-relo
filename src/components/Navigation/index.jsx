import React from 'react';

import styles from './Navigation.module.scss'

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__link}>
          <a href='/'>Меню</a>
        </li>
        <li className={styles.nav__link}>
          <a href='/'>Доставка</a>
        </li>
        <li className={styles.nav__link}>
          <a href='/'>Оплата</a>
        </li>
        <li className={styles.nav__link}>
          <a href='/' className={styles.active}>Бронь столика</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;