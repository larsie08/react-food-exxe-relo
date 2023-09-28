import React, { useContext } from "react";
import { Link } from "react-router-dom";

import ThemeButton from "./ThemeButton";
import Links from "../Links";

import { AppContext } from "../../App";

import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const { setIsOpenBurger } = useContext(AppContext);

  const onOpenModal = () => {
    setIsOpenBurger(true);
  };

  return (
    <aside className={styles.sidebar}>
      <ul className={styles.sidebar_content__header}>
        <li className={styles.sidebar__logo}>
          <Link to="/">
            <img alt="icons" src="./img/logo.webp" />
          </Link>
        </li>
        <li onClick={onOpenModal} className={styles.sidebar__menu}>
          <img alt="icons" src="./img/gg_menu-left.png" />
        </li>
        <li className={styles.switch_button}>
          <ThemeButton />
        </li>
      </ul>

      <div className={styles.sidebar_content__footer}>
        <Links />
      </div>
    </aside>
  );
};

export default Sidebar;
