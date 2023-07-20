import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className="page-footer__link">
        <li className="footer__link">
          <a href="/">
            <img alt="logo" src="./img/logo.png" />
          </a>
        </li>
      </ul>
      <h4>Политика конфиденциальности</h4>
      {/* <ul class={styles.block_card}>
        <li>
          <img alt='visa' src="./img/visa-card.png" />
        </li>
        <li>
          <img alt='mir' src="./img/mir-card.png" />
        </li>
        <li>
          <img alt='master-card' src="./img/masterCard.png" />
        </li>
      </ul> */}
      <h5>Дизайн d-e-n.ru</h5>
    </footer>
  );
};

export default Footer;
