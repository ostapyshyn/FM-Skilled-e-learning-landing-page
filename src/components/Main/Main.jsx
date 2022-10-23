import React from 'react';
import Course from '../Course';
import styles from './Main.module.scss';

function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.popular}>Check out our most popular courses!</div>
      <Course />
    </div>
  );
}

export default Main;
