import React from 'react';
import Header from 'components/header';
import Footer from 'components/footer';
import Title from 'components/title';
import TeamMember from 'components/team-member';

import Profile from '../profile.png';

export default function TeamPage(): JSX.Element {
  return (
    <>
      <Header />
      <Title>Meet the Team</Title>
      <TeamMember
        name='Nicholas Chiang'
        title='Website Developer'
        bio='A rising junior at Gunn High School passionate about CS, karate, running, cello, and more! Currently helping develop the New Cubberley website and blog.'
        link={{ label: 'Portfolio website', href: 'https://nicholaschiang.com' }}
        img={Profile}
      />
      <TeamMember
        name='Nicholas Chiang'
        title='Website Developer'
        bio='A rising junior at Gunn High School passionate about CS, karate, running, cello, and more! Currently helping develop the New Cubberley website and blog.'
        link={{ label: 'Portfolio website', href: 'https://nicholaschiang.com' }}
        img={Profile}
        flipped
      />
      <Footer />
    </>
  );
}
