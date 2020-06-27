import React from 'react';
import Link from 'next/link';

import styles from './footer.module.scss';

interface LinkProps {
  href: string;
  as?: string; 
  label: string;
}

function NavLink({
  href,
  as,
  label,
  className,
}: LinkProps & { className: string }): JSX.Element {
  if (href.indexOf('http') < 0 && href.indexOf('mailto') < 0)
    return (
      /* eslint-disable jsx-a11y/anchor-is-valid */
      <Link href={href} as={as}>
        <a className={className}>{label}</a>
      </Link>
      /* eslint-enable jsx-a11y/anchor-is-valid */
    );
  return (
    <a className={className} href={href}>
      {label}
    </a>
  );
}

function PrimaryLink(props: LinkProps): JSX.Element {
  return (
    <li className={styles.primaryLinkItem}>
      <NavLink {...props} className={styles.primaryLink} />
    </li>
  );
}

interface LinkGroupProps {
  header: string;
  links: LinkProps[];
}

function LinkGroup({ header, links }: LinkGroupProps): JSX.Element {
  return (
    <li className={styles.linkGroup}>
      <h2 className={styles.linkGroupHeader}>{header}</h2>
      <ul className={styles.linkGroupList}>
        {links.map((link) => (
          <PrimaryLink key={link.href} {...link} />
        ))}
      </ul>
    </li>
  );
}

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <span className={styles.sitemapTitle}>
        <h1 id='sitemap'>Sitemap</h1>
      </span>
      <nav className={styles.contentWrapper} aria-labelledby='sitemap'>
        <ul className={styles.primaryLinks}>
          <LinkGroup
            header='Useful Links'
            links={[
              {
                href: '#',
                label: 'Useful Link One',
              },
              {
                href: '#',
                label: 'Useful Link Two',
              },
              {
                href: '#',
                label: 'Useful Link Three',
              },
            ]}
          />
          <LinkGroup
            header='Resources'
            links={[
              {
                href: '#',
                label: 'Resource Link One',
              },
              {
                href: '#',
                label: 'Resource Link Two',
              },
              {
                href: '#',
                label: 'Resource Link Three',
              },
              {
                href: '#',
                label: 'Resource Link Four',
              },
            ]}
          />
          <LinkGroup
            header='Socials'
            links={[
              {
                href: '#',
                label: 'Facebook',
              },
              {
                href: '#',
                label: 'Instagram',
              },
              {
                href: '#',
                label: 'Twitter',
              },
              {
                href: '#',
                label: 'YouTube',
              },
              {
                href: '#',
                label: 'GitHub',
              },
              {
                href: '#',
                label: 'HelpWithCOVID',
              },
            ]}
          />
          <LinkGroup
            header='Team'
            links={[
              {
                href: '#',
                label: 'Home',
              },
              {
                href: '#',
                label: 'Directory',
              },
              {
                href: '#',
                label: 'Join the Slack',
              },
              {
                href: '#',
                label: 'Join the Team',
              },
              {
                href: '#',
                label: 'Contact Us',
              },
            ]}
          />
        </ul>
      </nav>
    </footer>
  );
}
