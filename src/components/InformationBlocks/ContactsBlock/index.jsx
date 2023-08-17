import React from 'react';

import { AppContext } from '../../../App';

import styles from './ContactsBlock.module.scss';

const ContactsBlock = () => {
  const { setIsOpenModal } = React.useContext(AppContext);

  return (
    <div className={styles.contacts}>
      <div className={styles.contacts__header}>
        <h1 className={styles.block__header}>контакты</h1>
        <div className={styles.line}>
          <img alt="underline" src="./img/underline.jpg" />
        </div>
      </div>

      <div className={styles.contacts__content}>
        <div className={styles.contacts__block__time}>
          <div className={styles.block__top}>
            <div className={styles.contacts__block}>
              <div className={styles.contacts__block__header}>
                <h1>2</h1>
                <h2>мин</h2>
              </div>
              <p>
                из центра
                <br />
                Санкт-Петербурга
              </p>
            </div>
            <div className={styles.contacts__block}>
              <div className={styles.contacts__block__header}>
                <h1>12</h1>
                <h2>мин</h2>
              </div>
              <p>
                из города
                <br />
                Зеленогорск
              </p>
            </div>
          </div>
          <div className={styles.block__bottom}>
            <div className={styles.contacts__block}>
              <div className={styles.contacts__block__header}>
                <h1>42</h1>
                <h2>мин</h2>
              </div>
              <p>
                из аэропорта
                <br />
                пулково
              </p>
            </div>
            <div className={styles.contacts__block}>
              <div className={styles.contacts__block__header}>
                <h1>52</h1>
                <h2>мин</h2>
              </div>
              <p>
                из города
                <br />
                Павловск
              </p>
            </div>
          </div>
        </div>

        <div className={styles.information}>
          <div className={styles.information__block}>
            <div className={styles.information__block__adress}>
              <img alt="vector" src="./img/Vector.png" />
              <p>Санкт-Петербург, Северная дорога, 11 </p>
            </div>
            <div className={styles.information__block__number}>
              <img alt="phone" src="./img/phone.png" />
              <p>+7 (921) 777-77-77</p>
            </div>
            <div className={styles.information__block__middle}>
              <h1 className={styles.information__block__middle__title}>Время работы</h1>
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
                <li onClick={() => setIsOpenModal(true)} className={styles.list__btn__left}>
                  <button className={styles.active_btn}>Бронь столика</button>
                </li>
                <li className={styles.list__btn__right}>
                  <button>Задать вопрос</button>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.background}>
            <img src="./img/map.jpg" alt="map" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsBlock;
