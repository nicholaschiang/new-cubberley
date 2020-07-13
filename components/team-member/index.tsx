import React from 'react';
import VanillaTilt from 'vanilla-tilt';
import CTALink from 'components/cta-link';

import styles from './team-member.module.scss';

interface TeamMemberProps {
  name: string;
  title: string;
  bio: string;
  img: string;
  link: { label: string; href: string };
  flipped?: boolean;
}

export default function TeamMember({ name, title, bio, img, link, flipped }: TeamMemberProps): JSX.Element {
  const imgRef: React.RefObject<HTMLDivElement> = React.useRef(null);

  React.useEffect(() => {
    if (imgRef.current) VanillaTilt.init(imgRef.current, { glare: true });
  }, [imgRef]);

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.content}${flipped ? ` ${styles.flipped}` : ''}`}>
        <div className={styles.left}>
          <div className={styles.name}>{name}</div>
          <div className={styles.title}>{title}</div>
          <div className={styles.bio}>{bio}</div>
          <CTALink {...link} />
        </div>
        <div className={styles.right}>
          <div className={styles.img} ref={imgRef} style={{ backgroundImage: `url(${img})` }} />
        </div>
      </div>
    </div>
  );
}