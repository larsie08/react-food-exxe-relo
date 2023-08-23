import React from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../../App';

import styles from './Sidebar.module.scss';

const Sidebar = () => {
  const {setIsOpenBurger} = React.useContext(AppContext);

  return (
    <aside className={styles.sidebar}>
      <ul className={styles.sidebar_content__header}>
        <li className={styles.sidebar__logo}>
          <Link to="/">
            <img alt="icons" src="./img/logo.webp" />
          </Link>
        </li>
        <li onClick={() => setIsOpenBurger(true)} className={styles.sidebar__menu}>
          <img alt="icons" src="./img/gg_menu-left.png" />
        </li>
      </ul>

      <ul className={styles.sidebar_content__footer}>
        <li>
          <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className={styles.icons}>
            <img alt="icons" src="./img/yt-icons.webp" />
          </Link>
        </li>
        <li>
          <Link to="https://vk.com" target="_blank" className={styles.icons}>
            <img alt="icons" src="./img/vk-icons.webp" />
          </Link>
        </li>
        <li>
          <Link to="https://telegram.org" target="_blank" className={styles.icons}>
            <img alt="icons" src="./img/tg-icons.webp" />
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
