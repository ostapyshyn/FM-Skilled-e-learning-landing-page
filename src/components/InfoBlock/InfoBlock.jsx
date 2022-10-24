import React from 'react';
import styles from './InfoBlock.module.scss';
import hero from '../../assets/hero/image-hero-desktop.png';

function InfoBlock() {
  return (
    <div className={styles.info}>
      <div className={styles.container}>
        <h1>Maximize skill, minimize budget</h1>
        <p>
          Our modern courses across a range of in-demand skills will give you the knowledge you need
          to live the life you want.
        </p>
        <button>Get Started</button>
      </div>

      <picture>
        <source media="(min-width: 1440px)" srcSet={hero} />
        <img src={hero} alt="hero" />
      </picture>
    </div>
  );
}

export default InfoBlock;
