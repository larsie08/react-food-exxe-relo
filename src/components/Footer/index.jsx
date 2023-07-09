import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer class={styles.footer}>
      <ul class="page-footer__link">
        <li class="footer__link">
          <a href="/">
            <img alt="logo" src="./img/logo.png" />
          </a>
        </li>
      </ul>
      <h4>Политика конфиденциальности</h4>
      <h5>Дизайн d-e-n.ru</h5>
    </footer>
  );
};

export default Footer;
