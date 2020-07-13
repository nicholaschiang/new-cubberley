import React from 'react';
import Link from 'next/link';

import styles from './header.module.scss';

function DesktopNav(): JSX.Element {
  return (
    /* eslint-disable jsx-a11y/anchor-is-valid */
    <div className={styles.desktopNav}>
      <Link href='/team'><a>Team</a></Link>
      <Link href='/faq'><a>FAQ</a></Link>
      <Link href='/archive'><a>Newsletters</a></Link>
      <Link href='/updates'><a>Latest Updates</a></Link>
      <a href='https://www.cityofpaloalto.org/gov/depts/cou/council_agendas.asp'>Council Meetings</a>
      <a href='https://www.pausd.org/about-us/board-of-education'>PAUSD Board</a>
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
          <Link href='/team'><a><li>The Team</li></a></Link>
          <Link href='/faq'><a><li>FAQ</li></a></Link>
          <Link href='/archive'><a><li>Newsletters</li></a></Link>
          <Link href='/updates'><a><li>Latest Updates</li></a></Link>
          <a href='https://www.cityofpaloalto.org/gov/depts/cou/council_agendas.asp'><li>Council Meetings</li></a>
          <a href='https://www.pausd.org/about-us/board-of-education'><li>PAUSD Board</li></a>
        </ul>
      </nav>
    </>
    /* eslint-enable jsx-a11y/anchor-is-valid */
  );
}

function Logo(): JSX.Element {
  return (
    /* eslint-disable jsx-a11y/anchor-is-valid */
    <Link href='/'>
      <a className={styles.logo}>
        <span className={styles.light}>N</span>CB
      </a>
    </Link>
    /* eslint-enable jsx-a11y/anchor-is-valid */
  );
}

export default function Header(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>
          <DesktopNav />
          <MobileNav />
        </div>
      </header>
    </div>
  );
}
