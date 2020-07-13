import React from 'react';
import Banner from 'components/banner';
import Spotlight from 'components/spotlight';

import Pool from './pool.png';
import Building from './building.png';

import styles from './about.module.scss';

export default function About(): JSX.Element {
  return (
    <>
      <Banner>
        <h2 className={styles.header}>What is New Cubberley?</h2>
        <p className={styles.body}>
          <b className={styles.bold}>
            Voluptas quos vitae corrupti.
          </b>
        </p>
        <p className={styles.body}>
          Voluptate explicabo possimus fugit reiciendis. Et sequi quis 
          nihil. Consequatur ducimus non voluptas voluptas aperiam reiciendis. 
        </p>
        <p className={styles.body}>
          Voluptate sed quod reprehenderit magni repellendus non aut. Velit 
          sint quisquam assumenda dignissimos est. Et odit quod quis 
          laboriosam.
        </p>
      </Banner>
      <div className={styles.howItWorks}>
        <Spotlight
          label='Category'
          headline='Lorem ipsum dolor'
          body='Voluptate sed quod reprehenderit magni repellendus non aut. Velit sint quisquam assumenda dignissimos est. Et odit quod quis'
          cta={{ label: 'Learn more', href: '#' }}
          img={Pool}
        />
        <Spotlight
          label='Category'
          headline='Lorem ipsum dolor'
          body='Voluptate sed quod reprehenderit magni repellendus non aut. Velit sint quisquam assumenda dignissimos est. Et odit quod quis'
          cta={{ label: 'Learn more', href: '#' }}
          img={Building}
          flipped
          gray
        />
        <Spotlight
          label='Category'
          headline='Lorem ipsum dolor'
          body='Voluptate sed quod reprehenderit magni repellendus non aut. Velit sint quisquam assumenda dignissimos est. Et odit quod quis'
          cta={{ label: 'Learn more', href: '#' }}
          img={Pool}
        />
      </div>
    </>
  );
}
