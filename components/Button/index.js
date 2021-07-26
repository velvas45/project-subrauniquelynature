import React from 'react';
import styles from './button.module.scss';

function Button({ label, onClicked }) {
  return (
    <button className={styles.btnBlack} onClick={onClicked}>
      {label}
    </button>
  );
}

export default Button;
