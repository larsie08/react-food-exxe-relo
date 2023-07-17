import React from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../../App';


import styles from './Navigation.module.scss'

const Navigation = () => {
  const {setIsOpenModal} = React.useContext(AppContext);

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__link}>
          <Link to='menu'>Меню</Link>
        </li>
        <li className={styles.nav__link}>
          <a href='/'>Доставка</a>
        </li>
        <li className={styles.nav__link}>
          <a href='/'>Оплата</a>
        </li>
        <li onClick={() => setIsOpenModal(true)} className={styles.nav__link}>
          <button className={styles.active}>Бронь столика</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;