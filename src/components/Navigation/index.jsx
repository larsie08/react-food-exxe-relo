import React from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../../App";

import styles from "./Navigation.module.scss";

const Navigation = () => {
  const { setIsOpenModal } = React.useContext(AppContext);

  const onOpenReserve = () => {
    setIsOpenModal(true);
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__link}>
          <Link to="menu">Меню</Link>
        </li>
        <li className={styles.nav__link}>
          <Link to="*">Доставка</Link>
        </li>
        <li className={styles.nav__link}>
          <Link to="*">Оплата</Link>
        </li>
        <li onClick={onOpenReserve} className={styles.nav__link}>
          <button className={styles.active}>Бронь столика</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
