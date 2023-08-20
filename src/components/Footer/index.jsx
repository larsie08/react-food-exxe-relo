import React from 'react';
import {Link} from 'react-router-dom'

import styles from './Footer.module.scss';

const Footer = ({ renderMenu }) => {
  const footerList = (
    <ul className={styles.block_card}>
      <li>
        <img alt="visa" src="./img/visa-card.png" />
      </li>
      <li>
        <img alt="mir" src="./img/mir-card.png" />
      </li>
      <li>
        <img alt="master-card" src="./img/masterCard.png" />
      </li>
    </ul>
  );

  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <Link href="/">
            <img alt="logo" src="./img/logo.png" />
          </Link>
        </li>
      </ul>
      <h4>Политика конфиденциальности</h4>
      {renderMenu && footerList}
      <h5>Дизайн d-e-n.ru</h5>
    </footer>
  );
};

export default Footer;
