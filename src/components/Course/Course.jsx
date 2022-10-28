import React from 'react';
import styles from './Course.module.scss';

function Course({ title, text, image }) {
  return (
    <div className={styles.course}>
      <h2>{title}</h2>
      <img src={image} alt="icon" />
      <p>{text}</p>
      <button>Get Started</button>
    </div>
  );
}

export default Course;
