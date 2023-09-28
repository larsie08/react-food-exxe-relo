import React from "react";
import { Link } from "react-router-dom";

import styles from "./MenuBlock.module.scss";

const MenuBlock = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__header}>
        <h1 className={styles.block__header}>меню</h1>
        <div className={styles.line}></div>
      </div>
      <div className={styles.menu__content}>
        <h1>Меню</h1>
        <div className={styles.content}>
          <p>
            At faucibus nullam mauris vitae ut non. Augue libero non nibh nec,
            et eget erat. Nascetur nunc neque, varius massa aliquam interdum
            turpis massa. Ac tortor aliquam risus, interdum nisl mauris sit. Ut
            placerat fermentum pellentesque ac at. Vitae venenatis faucibus urna
            mi eget vitae quam eu. Euismod sed mauris id turpis iaculis. Erat
            rutrum dolor, vitae morbi.
          </p>
          <p>Nunc cras cras aliquet blandit faucibus massa sagittis semper.</p>
        </div>
      </div>
      <div className={styles.menu__footer}>
        <div className={styles.menu__block}>
          <div className={styles.block__img}>
            <Link to="menu">
              <img alt="menu" src="./img/menu_1.webp" />
            </Link>
          </div>
          <div className={styles.block__footer}>
            <Link to="menu" className={styles.block__header}>
              Основное меню
            </Link>
            <div className={styles.line} />
          </div>
        </div>
        <div className={styles.menu__block}>
          <div className={styles.block__img}>
            <Link to="*">
              <img alt="bar_card" src="./img/menu_2.webp" />
            </Link>
          </div>
          <div className={styles.block__footer}>
            <Link to="*" className={styles.block__header}>
              Барная карта
            </Link>
            <div className={styles.line} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBlock;
