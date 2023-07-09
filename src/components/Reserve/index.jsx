import React from 'react';

const Reserve = () => {
  return (
    <div class="rezerv-modal">
      <div class="rezerv-modal__close close-modal">
        <a href="/" class="rezerv__close">
          <img alt="close" src="/assets/img/close.png" />
        </a>
      </div>
      <div class="rezerv-modal__logo">
        <a href="/" class="rezerv__logo">
          <img alt="logo" src="/assets/img/logo.png" />
        </a>
      </div>
      <div class="rezerv-modal__title">
        <h4>Забронировать столик</h4>
      </div>
      <form class="rezerv-modal__form">
        <label class="name-label form-label">
          <input type="text" placeholder="Имя" class="input" />
        </label>
        <label class="tel-label form-label">
          <input type="tel" placeholder="Телефон" class="input" />
        </label>
        <div class="block__form">
          <label class="number-label form-label">
            <input type="number" placeholder="Гостей" class="input block-input__left" />
          </label>
          <label class="time-label form-label">
            <input type="number" placeholder="Время" class="input block-input__right" />
          </label>
        </div>
      </form>
      <div class="rezerv-modal__footer">
        <a href="/" class="rezerv__button">
          Забронировать
        </a>
      </div>
    </div>
  );
};

export default Reserve;
