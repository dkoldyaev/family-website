import React from 'react';
import styles from './DecorativeElements.module.css';

interface DecorativeElementsProps {
  variant?: 'top' | 'bottom';
}

export default function DecorativeElements({ variant = 'top' }: DecorativeElementsProps) {
  const dotCount = variant === 'top' ? 4 : 3;

  return (
    <div className={styles.container}>
      <div className={styles.rectangle}></div>
      <div className={`${styles.dots} ${styles[`${variant}Separator`]}`}>
        {Array.from({ length: dotCount }, (_, i) => (
          <div key={i} className={styles.dot}></div>
        ))}
      </div>
    </div>
  );
}

