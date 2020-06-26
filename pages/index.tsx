import React from 'react';
import Head from 'next/head';
import Header from 'components/header';
import Hero from 'components/hero';
import About from 'components/about';
import Footer from 'components/footer';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>New Cubberley</title>
      </Head>
      <Header />
      <Hero />
      <About />
      <Footer />
    </>
  )
}
