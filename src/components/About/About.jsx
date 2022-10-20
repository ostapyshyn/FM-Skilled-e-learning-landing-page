import React from 'react';
import styles from './About.module.scss';

function About({ backColor }) {
  return (
    <div style={{ backgroundColor: `var(${backColor})` }} className={styles}>
      skilled
      <button>Get Started</button>
    </div>
  );
}

export default About;
