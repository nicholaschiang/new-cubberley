import React from 'react';
import Head from 'next/head';
import Logo from 'components/logo';
import About from 'components/about';
import Footer from 'components/footer';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>New Cubberley</title>
      </Head>
      <Logo />
      <About />
      <Footer />
    </>
  )
}
