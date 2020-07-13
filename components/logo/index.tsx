import React from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './logo.module.scss';

export default function Logo(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <CSSTransition in appear timeout={1700} classNames={styles}>
        <div className={styles.content}>
          <h2 className={styles.new}>New</h2>
          <h1 className={styles.cubberley}>Cubberley</h1>
          <h3 className={styles.subtitle}>Space for Everyone</h3>
        </div>
      </CSSTransition>
    </div>
  );
}
