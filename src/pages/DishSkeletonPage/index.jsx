import React, { useContext, useState, useEffect } from "react";
import ContentLoader from "react-content-loader";

import NavigationMenu from "../../components/MenuComponents/NavigationMenu";
import Categories from "../../components/MenuComponents/Categories";
import ImgSkeleton from "../../components/Skeletons/DishSkeleton/ImgSkeleton";
import DishSkeletonContent from "../../components/Skeletons/DishSkeleton/DishSkeletonContent";
import ContactsBlock from "../../components/InformationBlocks/ContactsBlock";
import Footer from "../../components/Footer";

import { AppContext } from "../../App";

import styles from "./DishSkeletonPage.module.scss";
import MakeTastySkeletonBlock from "../../components/Skeletons/DishSkeleton/MakeTastySkeletonBlock";

const DishSkeletonPage = () => {
  const { isDarkTheme } = useContext(AppContext);
  const [width, setWidth] = useState(window.innerWidth);

  const breakpoint = 820;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <NavigationMenu />
      <div className={styles.container}>
        <Categories />
        <div className={styles.content}>
          {width > breakpoint && <ImgSkeleton />}
          <div className={styles.content__dish_info}>
            <div className={styles.content__dish_info__title}>
              <ContentLoader
                className={styles.skeleton__title_content}
                speed={2}
                backgroundColor={isDarkTheme ? "#545454" : "#d6d6d6"}
                foregroundColor="#ecebeb"
              >
                <rect className={styles.title} x="0" y="0" rx="0" ry="0" />
              </ContentLoader>
            </div>
            <div className={styles.line} />
            {width <= breakpoint && <ImgSkeleton />}
            <div className={styles.content__dish_info__price_block}>
              <DishSkeletonContent />
              <div className={styles.line} />
              <MakeTastySkeletonBlock />
            </div>
          </div>
        </div>
        <ContactsBlock />
      </div>
      <Footer renderMenu={true} />
    </div>
  );
};

export default DishSkeletonPage;
