import React from 'react';
import styles from './Button.module.scss';

// interface ButtonProps {
//   children: string;
//   onClick?: React.MouseEventHandler<HTMLButtonElement>;
// }

function Button({ children, backColor, img, btnColor, dark }) {
  return (
    <button
      style={{ background: btnColor }}
      className={`${styles.button} ${dark ? styles.active_light : styles.active_dark} `}>
      {children}
    </button>
  );
}

export default Button;
