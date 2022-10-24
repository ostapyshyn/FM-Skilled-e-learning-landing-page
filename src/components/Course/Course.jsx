import React from 'react';
import Button from '../Button';
import styles from './Course.module.scss';
import { ReactComponent as Animation } from '../../assets/svg/icon-animation.svg';

function Course({ title, text, image }) {
  return (
    <div className={styles.course}>
      <h2>{title}</h2>
      <Animation />
      <p>{text}</p>
      <button>Get Started</button>
    </div>
  );
}

export default Course;
