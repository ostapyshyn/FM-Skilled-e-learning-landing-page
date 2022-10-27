import React, { useEffect, useState } from 'react';
import Button from '../Button';
import styles from './About.module.scss';

function About({ backColor, dark, btnColor }) {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        backgroundColor: `var(${backColor})`,
        height: dark ? '120px' : windowSize <= 767 ? '75px' : windowSize <= 1024 ? '90px' : '104px',
      }}
      className={styles.about_info}>
      <div className={styles.about}>
        <span
          style={{
            color: dark ? '#fff' : '#13183F',
          }}>
          skilled
        </span>
        <Button btnColor={btnColor} dark={dark}>
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default About;
