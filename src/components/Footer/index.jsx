import React from "react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.scss";

const footerList = (
  <ul className={styles.block_card}>
    <li>
      <img alt="visa" src="./img/visa-card.webp" />
    </li>
    <li>
      <img alt="mir" src="./img/mir-card.webp" />
    </li>
    <li>
      <img alt="master-card" src="./img/masterCard.webp" />
    </li>
  </ul>
);

const Footer = ({ renderMenu }) => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <Link href="/">
            <img alt="logo" src="./img/logo.webp" />
          </Link>
        </li>
        <li>
          <h4>Политика конфиденциальности</h4>
        </li>
        <li>{renderMenu && footerList}</li>
        <li>
          <h5>Дизайн d-e-n.ru</h5>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
