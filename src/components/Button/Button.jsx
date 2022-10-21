import React from 'react';
import styles from './Button.module.scss';

// interface ButtonProps {
//   children: string;
//   onClick?: React.MouseEventHandler<HTMLButtonElement>;
// }

function Button({ children, backColor, img, btnColor }) {
  return (
    <button style={{ background: btnColor }} className={styles.button}>
      {children}
    </button>
  );
}

export default Button;
