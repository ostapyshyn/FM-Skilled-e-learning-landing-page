import React from 'react';
import styles from './InfoBlock.module.scss';

function InfoBlock() {
  return (
    <div className={styles.info}>
      <h1>Maximize skill, minimize budget</h1>
      <p>
        Our modern courses across a range of in-demand skills will give you the knowledge you need
        to live the life you want.
      </p>
      <button>Get Started</button>
    </div>
  );
}

export default InfoBlock;
