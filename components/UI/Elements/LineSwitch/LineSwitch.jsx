import React from 'react';
import styles from './LineSwitch.module.scss';

export default function LineSwitch({ Name, leftLabel, rightLabel }) {
  return (
    <div className={styles.toggleSwitchContainer}>
      <span className={styles.leftLabel}>{leftLabel}</span>
      <div className={styles.toggleSwitch}>
        <input
          type="checkbox"
          className={styles.toggleSwitchCheckbox}
          name={Name}
          id={Name}
        />
        <label className={styles.toggleSwitchLabel} htmlFor={Name}>
          <span className={styles.toggleSwitchSwitch}></span>
        </label>
      </div>
      <span className={styles.rightLabel}>{rightLabel}</span>
    </div>
  );
}
