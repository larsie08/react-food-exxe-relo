import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

import classNames from "classnames";

import Links from "../../Links";

import { AppContext } from "../../../App";

import styles from "./MenuBurger.module.scss";

const MenuBurger = () => {
  const { isOpenBurger, setIsOpenBurger, setIsOpenModal } =
    React.useContext(AppContext);

  useEffect(() => {
    function handlekeydownEvent(event) {
      const { keyCode } = event;
      if (keyCode === 27) {
        if (isOpenBurger) {
          setIsOpenBurger(false);
        }
      }
    }

    document.addEventListener("keyup", handlekeydownEvent);
    return () => {
      document.removeEventListener("keyup", handlekeydownEvent);
    };
    // eslint-disable-next-line
  }, [isOpenBurger]);

  const onCloseMenu = () => {
    setIsOpenBurger(false);
  };

  const onOpenReserve = () => {
    setIsOpenModal(true);
  };

  return ReactDOM.createPortal(
    <div
      className={classNames(styles.menu_burger, {
        [styles.menu_burger__active]: isOpenBurger,
      })}
    >
      <div
        className={classNames(styles.menu_burger__content, {
          [styles.menu_burger__content__active]: isOpenBurger,
        })}
      >
        <ul className={styles.menu_burger__content__header}>
          <Link to="/" onClick={onCloseMenu} className={styles.logo}>
            <img alt="logo" src="./img/logo.webp" />
          </Link>
          <li onClick={onCloseMenu}>
            <img alt="close" src="./img/mini-close.webp" />
          </li>
        </ul>

        <div className={styles.menu_burger__content__middle}>
          <ul className={styles.content}>
            <li onClick={onCloseMenu}>
              <Link to="menu">Меню</Link>
            </li>
            <li onClick={onCloseMenu}>
              <Link to="*">Доставка</Link>
            </li>
            <li onClick={onCloseMenu}>
              <Link to="*">Оплата</Link>
            </li>
            <li>
              <button onClick={onOpenReserve}>Бронь столика</button>
            </li>
          </ul>
        </div>

        <div className={styles.menu_burger__content__footer}>
          <Links />
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default MenuBurger;
