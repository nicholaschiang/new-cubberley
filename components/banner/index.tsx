import React from 'react';

import styles from './banner.module.scss';

interface BannerProps {
  children: React.ReactNode;
}

export default function Banner({ children }: BannerProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.diagonalTop} />
      <div className={styles.background}>
        <div className={styles.content}>{children}</div>
      </div>
      <div className={styles.diagonalBottom} />
    </div>
  );
}
