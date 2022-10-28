import React from 'react';
import Course from '../Course';
import styles from './Main.module.scss';
import courses from '../../assets/courses.js';
import hero from '../../assets/hero/image-hero-mobile.png';

function Main() {
  return (
    <main className={styles.container}>
      <img src={hero} alt="hero" className={styles.image} />
      <div className={styles.popular}>Check out our most popular courses!</div>
      {courses.map((course, index) => {
        return <Course title={course.title} text={course.text} image={course.image} key={index} />;
      })}
    </main>
  );
}

export default Main;
