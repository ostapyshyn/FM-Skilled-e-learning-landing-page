import React from 'react';
import Button from '../Button';
import styles from './About.module.scss';

function About({ backColor, img, btnColor }) {
  return (
    <div style={{ backgroundColor: `var(${backColor})` }} className={styles.about_info}>
      <div className={styles.about}>
        <img src={img} alt="logo" />
        <Button btnColor={btnColor}>Get Started</Button>
      </div>
    </div>
  );
}

export default About;
