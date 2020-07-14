import React from 'react';
import Logo from 'components/logo';
import Header from 'components/header';
import Footer from 'components/footer';
import Slices from 'components/slices';

import { getPrismicProps, Slice, Document } from 'lib/prismic';
import { GetStaticProps } from 'next';

interface HomePageData {
  body: Slice[];
}

interface HomePageProps {
  doc: Omit<Document, 'data'> & { data: HomePageData };
}

export default function HomePage({ doc }: HomePageProps): JSX.Element {
  return (
    <>
      <Header />
      <Logo />
      <Slices slices={doc.data.body} />
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => ({
  props: await getPrismicProps<HomePageData>('homepage', context),
});
