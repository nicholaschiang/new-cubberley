import React from 'react';

import styles from './title.module.scss';

export default function Title({ children }: { children: string }): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.title}>{children}</h1>
      </div>
    </div>
  );
}
