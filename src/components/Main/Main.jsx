import React from 'react';
import Course from '../Course';
import styles from './Main.module.scss';

function Main() {
  return (
    <div className={styles.container}>
      <Course />
    </div>
  );
}

export default Main;
