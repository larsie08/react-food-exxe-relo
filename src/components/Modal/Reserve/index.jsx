import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import { AppContext } from "../../../App";

import styles from "./Reserve.module.scss";
import classNames from "classnames";

const Reserve = () => {
  const { isOpenModal, setIsOpenModal } = React.useContext(AppContext);

  useEffect(() => {
    function handlekeydownEvent(event) {
      const { keyCode } = event;
      if (keyCode === 27) {
        if (isOpenModal) {
          setIsOpenModal(false);
        }
      }
    }

    document.addEventListener("keyup", handlekeydownEvent);
    return () => {
      document.removeEventListener("keyup", handlekeydownEvent);
    };
  });

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  return ReactDOM.createPortal(
    <div
      className={classNames(styles.reserve, {
        [styles.reserve__active]: isOpenModal,
      })}
    >
      <div
        className={classNames(styles.reserve__content, {
          [styles.reserve__content__active]: isOpenModal,
        })}
      >
        <div className={styles.reserve__content__close}>
          <img onClick={onCloseModal} alt="close" src="./img/close.webp" />
        </div>
        <div className={styles.reserve__content__logo}>
          <img onClick={onCloseModal} alt="logo" src="./img/logo.webp" />
        </div>
        <div className={styles.reserve__content__title}>
          <h4>Забронировать столик</h4>
        </div>
        <form className={styles.reserve__content__form}>
          <li className={styles.form__name}>
            <input type="text" placeholder="Имя" />
          </li>
          <li className={styles.form__tel}>
            <input type="tel" placeholder="Телефон" />
          </li>
          <ul className={styles.form__block}>
            <li className={styles.form__visitors}>
              <input type="number" placeholder="Гостей" />
            </li>
            <li className={styles.form__time}>
              <input type="time" placeholder="Время" />
            </li>
          </ul>
        </form>
        <div className={styles.reserve__content__footer}>
          <button>Забронировать</button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Reserve;
