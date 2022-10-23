import React from 'react';
import Button from '../Button';
import styles from './Course.module.scss';
import { ReactComponent as Animation } from '../../assets/svg/icon-animation.svg';

function Course() {
  return (
    <div className={styles.course}>
      <h2>Animation</h2>
      <Animation />
      <p>
        Learn the latest animation techniques to create stunning motion design and captivate your
        audience.
      </p>
      <button>Get Started</button>
    </div>
  );
}

export default Course;
