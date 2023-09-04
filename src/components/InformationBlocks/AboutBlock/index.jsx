import React from 'react';

import styles from './AboutBlock.module.scss';

const AboutBlock = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about__header}>
        <h1 className={styles.block__header}>о ресторане</h1>
        <div className={styles.line}>
          
        </div>
      </div>
      <div className={styles.about__content}>
        <h1>Food Exxe Relo</h1>
        <div className={styles.content}>
          <p>
            Sed vel ornare ut rhoncus, ac ut nibh. Amet at sit et nibh. In lectus phasellus non
            ornare eget velit. Facilisi urna, tristique dui, rhoncus, dolor. Tincidunt enim gravida
            dignissim leo pulvinar sit volutpat nulla vestibulum.
          </p>
          <p>
            Morbi pellentesque enim massa laoreet vel id. Lectus ac, facilisis neque turpis. Morbi
            massa enim nullam sem vehicula. Amet quis pellentesque enim porttitor lectus interdum.
            Nisi, faucibus pharetra at porttitor. Fringilla luctus pretium in viverra. In adipiscing
            tempor amet malesuada ullamcorper ut sagittis. Dui, scelerisque vulputate risus massa
            dictum. Cras at quis in eu, faucibus feugiat vel. At.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBlock;
