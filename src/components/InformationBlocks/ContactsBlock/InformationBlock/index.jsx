import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../../../../App";

import styles from "./InformationBlock.module.scss";

const InformationBlock = () => {
  const { setIsOpenModal } = useContext(AppContext);

  const onOpenModal = () => {
    setIsOpenModal(true);
  };

  return (
    <div className={styles.information}>
      <div className={styles.information__block}>
        <div className={styles.information__block__adress}>
          <img alt="vector" src="./img/Vector.webp" />
          <p>Санкт-Петербург, Северная дорога, 11 </p>
        </div>
        <div className={styles.information__block__number}>
          <img alt="phone" src="./img/phone.webp" />
          <p>+7 (921) 777-77-77</p>
        </div>
        <div className={styles.information__block__middle}>
          <h1 className={styles.information__block__middle__title}>
            Время работы
          </h1>
          <div className={styles.block__content}>
            <div className={styles.block__content__header}>
              <h1>Вс-Чт</h1>
              <h2>с 12:00 до 23:00</h2>
            </div>
            <div className={styles.block__content__footer}>
              <h1>Пт-Сб</h1>
              <h2>с 12:00 до 03:00</h2>
            </div>
          </div>
        </div>
        <div className={styles.information__block__footer}>
          <ul className={styles.list__btn}>
            <li onClick={onOpenModal} className={styles.list__btn__left}>
              <button className={styles.active_btn}>Бронь столика</button>
            </li>
            <Link to="*" className={styles.list__btn__right}>
              Задать вопрос
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InformationBlock;
