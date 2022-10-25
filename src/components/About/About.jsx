import React from 'react';
import Button from '../Button';
import styles from './About.module.scss';

function About({ backColor, dark, btnColor }) {
  return (
    <div style={{ backgroundColor: `var(${backColor})` }} className={styles.about_info}>
      <div className={styles.about}>
        <span style={{ color: dark ? '#fff' : '#13183F' }}>skilled</span>
        <Button btnColor={btnColor}>Get Started</Button>
      </div>
    </div>
  );
}

export default About;
