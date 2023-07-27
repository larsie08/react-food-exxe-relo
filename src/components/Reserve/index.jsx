import React from 'react';
import ReactDOM from 'react-dom';

import { AppContext } from '../../App';

import styles from './Reserve.module.scss';
import classNames from 'classnames';

const Reserve = () => {
  const { isOpenModal, setIsOpenModal } = React.useContext(AppContext);

  return ReactDOM.createPortal(
    <div className={classNames(styles.reserve, { [styles.reserve__active]: isOpenModal })}>
      <div
        className={classNames(styles.reserve__content, {
          [styles.reserve__content__active]: isOpenModal,
        })}>
        <div onClick={() => setIsOpenModal(false)} className={styles.reserve__content__close}>
          <img alt="close" src="./img/close.png" />
        </div>
        <div onClick={() => setIsOpenModal(false)} className={styles.reserve__content__logo}>
          <img alt="logo" src="./img/logo.png" />
        </div>
        <div className={styles.reserve__content__title}>
          <h4>Забронировать столик</h4>
        </div>
        <form className={styles.reserve__content__form}>
          <div className={styles.form__name}>
            <input type="text" placeholder="Имя" />
          </div>
          <div className={styles.form__tel}>
            <input type="tel" placeholder="Телефон" />
          </div>
          <div className={styles.form__block}>
            <div className={styles.form__visitors}>
              <input type="number" placeholder="Гостей" />
            </div>
            <div className={styles.form__time}>
              <input type="number" placeholder="Время" />
            </div>
          </div>
        </form>
        <div className={styles.reserve__content__footer}>
          <button>Забронировать</button>
        </div>
      </div>
    </div>,
    document.getElementById('portal'),
  );
};

export default Reserve;
