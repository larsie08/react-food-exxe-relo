import React from "react";

import InformationBlock from "./InformationBlock";

import styles from "./ContactsBlock.module.scss";

const ContactsBlock = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.contacts__header}>
        <h1 className={styles.block__header}>контакты</h1>
        <div className={styles.line}></div>
      </div>
      <div className={styles.contacts__content}>
        <div className={styles.contacts__block__time}>
          <div className={styles.block__top}>
            <div className={styles.contacts__block}>
              <div className={styles.contacts__block__header}>
                <h1>2</h1>
                <h2>мин</h2>
              </div>
              <p>из центра Санкт-Петербурга</p>
            </div>
            <div className={styles.contacts__block}>
              <div className={styles.contacts__block__header}>
                <h1>12</h1>
                <h2>мин</h2>
              </div>
              <p>из города Зеленогорск</p>
            </div>
          </div>
          <div className={styles.block__bottom}>
            <div className={styles.contacts__block}>
              <div className={styles.contacts__block__header}>
                <h1>42</h1>
                <h2>мин</h2>
              </div>
              <p>из аэропорта Пулково</p>
            </div>
            <div className={styles.contacts__block}>
              <div className={styles.contacts__block__header}>
                <h1>52</h1>
                <h2>мин</h2>
              </div>
              <p>из города Павловск</p>
            </div>
          </div>
        </div>
        <InformationBlock />
      </div>
    </div>
  );
};

export default ContactsBlock;
