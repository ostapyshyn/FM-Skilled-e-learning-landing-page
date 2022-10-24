import React from 'react';
import Course from '../Course';
import styles from './Main.module.scss';
import courses from '../../assets/courses.js';

function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.popular}>Check out our most popular courses!</div>
      {courses.map((course) => {
        return <Course title={course.title} text={course.text} image={course.image} />;
      })}
    </div>
  );
}

export default Main;
