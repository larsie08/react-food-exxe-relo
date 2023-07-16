import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Sidebar.module.scss';

const Sidebar = () => {

  return (
    <aside className={styles.sidebar}>
      <ul className={styles.sidebar_content__header}>
        <li className={styles.sidebar__logo}>
          <Link to="/">
            <img alt="icons" src="./img/logo.png" />
          </Link>
        </li>
        <li className={styles.sidebar__menu}>
          <img alt="icons" src="./img/gg_menu-left.png" />
        </li>
      </ul>

      <ul className={styles.sidebar_content__footer}>
        <li>
          <a href="/" className={styles.icons}>
            <img alt="icons" src="./img/yt-icons.png" />
          </a>
        </li>
        <li>
          <a href="/" className={styles.icons}>
            <img alt="icons" src="./img/vk-icons.png" />
          </a>
        </li>
        <li>
          <a href="/" className={styles.icons}>
            <img alt="icons" src="./img/tg-icons.png" />
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
