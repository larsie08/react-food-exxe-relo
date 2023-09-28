import React from "react";
import { Link } from "react-router-dom";

import styles from "./DeliveryBlock.module.scss";

const DeliveryBlock = () => {
  return (
    <div className={styles.delivery}>
      <div className={styles.delivery__header}>
        <h1 className={styles.block__header}>доставка</h1>
        <div className={styles.line}></div>
      </div>
      <div className={styles.delivery__content}>
        <h1>
          Служба
          <br />
          доставки
        </h1>
        <div className={styles.content}>
          <p>
            Phasellus diam, ultrices lobortis integer et. Diam, purus vel
            sagittis, non, a. In risus, venenatis enim vitae mauris aliquet
            orci. Consectetur nibh interdum nullam ut lobortis eu etiam sem. Et
            in vitae pellentesque non, lectus orci natoque faucibus suspendisse.
            Semper aliquam id et ultrices velit donec lacus. In odio sit nibh
            volutpat cras placerat sit feugiat dignissim. Rutrum et suspendisse
            tortor, lobortis eleifend in fringilla. Egestas cursus imperdiet
            cursus dui, nulla id massa. Hendrerit nam enim semper porttitor
            imperdiet diam semper. Nulla sit etiam cras morbi enim elementum
            euismod sapien.
          </p>
        </div>
      </div>
      <div className={styles.delivery__footer}>
        <ul className={styles.delivery__footer__btn}>
          <li className={styles.btn__left}>
            <Link to="*" className={styles.btn}>
              Подробнее
            </Link>
          </li>
          <li className={styles.btn__right}>
            <Link to="*" className={styles.btn}>
              Условия доставки
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DeliveryBlock;
