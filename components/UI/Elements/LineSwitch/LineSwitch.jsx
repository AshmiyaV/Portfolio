import React, { useState } from 'react';
import styles from './LineSwitch.module.scss';

export default function LineSwitch({ Name, leftLabel = 'Circular', rightLabel = 'List', onToggle }) {
  const [selected, setSelected] = useState('circular');

  const handleChange = (event) => {
    const newValue = event.target.checked ? 'circular' : 'list';
    setSelected(newValue);
    if (onToggle) {
      onToggle(newValue);
    }
  };

  return (
    <div className={styles.toggleSwitchContainer}>
      <span className={styles.leftLabel}>{leftLabel}</span>
      <div className={styles.toggleSwitch}>
        <input
          type="checkbox"
          className={styles.toggleSwitchCheckbox}
          name={Name}
          id={Name}
          checked={selected === 'circular'}
          onChange={handleChange}
        />
        <label className={styles.toggleSwitchLabel} htmlFor={Name}>
          <span className={styles.toggleSwitchSwitch}></span>
        </label>
      </div>
      <span className={styles.rightLabel}>{rightLabel}</span>
    </div>
  );
}
