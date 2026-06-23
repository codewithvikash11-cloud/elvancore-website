'use client';

import React from 'react';
import styles from './InfiniteMarquee.module.css';

export function InfiniteMarquee({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeContent}>
        {children}
        {/* Duplicate for seamless infinite scrolling */}
        {children}
      </div>
    </div>
  );
}
