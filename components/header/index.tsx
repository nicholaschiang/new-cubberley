import React from 'react';
import Link from 'next/link';

import styles from './header.module.scss';

function DesktopNav(): JSX.Element {
  return (
    /* eslint-disable jsx-a11y/anchor-is-valid */
    <div className={styles.desktopNav}>
      <Link href='/about'><a>About</a></Link>
      <Link href='/mission'><a>Mission</a></Link>
    </div>
    /* eslint-enable jsx-a11y/anchor-is-valid */
  );
}

function MobileNav(): JSX.Element {
  const [active, setActive] = React.useState<boolean>(false);
  const activeClass: string = active ? ` ${styles.active}` : '';
  return (
    /* eslint-disable jsx-a11y/anchor-is-valid */
    <>
      <button className={styles.toggle} onClick={() => setActive(!active)} type='button'>
        <div className={styles.toggleIcon + activeClass} />
      </button>
      <nav className={styles.mobileNav + activeClass}>
        <ul className={styles.mobileLinks}>
          <Link href='/about'><a><li>About</li></a></Link>
          <Link href='/mission'><a><li>Mission</li></a></Link>
        </ul>
      </nav>
    </>
    /* eslint-enable jsx-a11y/anchor-is-valid */
  );
}

function Logo(): JSX.Element {
  /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
  return <Link href='/'><a className={styles.logo}><span>NC</span></a></Link>;
}

export default function Header(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>
          <MobileNav />
          <DesktopNav />
        </div>
      </header>
    </div>
  );
}
