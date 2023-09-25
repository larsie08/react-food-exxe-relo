import React, { useContext, useEffect, useState } from "react";

import ContentLoader from "react-content-loader";

import styles from "./ImgSkeleton.module.scss";

import { AppContext } from "../../../../App";

const ImgSkeleton = () => {
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
    <ContentLoader
      className={styles.content}
      speed={2}
      width={415}
      height={430}
      backgroundColor={isDarkTheme ? "#545454" : "#d6d6d6"}
      foregroundColor="#ecebeb"
    >
      <rect className={styles.main_img} x="0" y="0" rx="0" ry="0" />
      {width > breakpoint && (
        <>
          <rect className={styles.small_img} x="0" y="325" rx="0" ry="0" />
          <rect className={styles.small_img} x="150" y="325" rx="0" ry="0" />
          <rect className={styles.small_img} x="300" y="325" rx="0" ry="0" />
        </>
      )}
    </ContentLoader>
  );
};

export default ImgSkeleton;
