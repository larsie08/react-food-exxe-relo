import React from "react";

import NavigationMenu from "../../components/MenuComponents/NavigationMenu";
import Footer from "../../components/Footer";

import styles from "./EmptyPage.module.scss";
import ContactsBlock from "../../components/InformationBlocks/ContactsBlock";
import Categories from "../../components/MenuComponents/Categories";

const EmptyPage = () => {
  return (
    <div className={styles.wrapper}>
      <NavigationMenu />
      <div className={styles.container}>
        <Categories />

        <div className={styles.content}>
          <h1>
            <span>:(</span>
            <br />
            Ничего не найдено
          </h1>
          <p className={styles.description}>
            К сожалению данная страница отсутсвует на нашем сайте
          </p>
        </div>
        <ContactsBlock />
      </div>
      <Footer renderMenu={true} />
    </div>
  );
};

export default EmptyPage;
