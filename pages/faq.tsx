import React from 'react';
import Header from 'components/header';
import Footer from 'components/footer';
import Title from 'components/title';

import { richTextProps, getPrismicProps, Text, Document } from 'lib/prismic';
import { CollapseGroup, Collapse } from 'components/collapse';
import { RichText } from 'prismic-reactjs';
import { GetStaticProps } from 'next';
import { v4 as uuid } from 'uuid';

interface FAQSet {
  question: Text;
  answer: Text;
}

interface FAQData {
  questions: FAQSet[];
  title: Text;
}

interface FAQPageProps {
  doc: Omit<Document, 'data'> & { data: FAQData };
}

export default function FAQPage({ doc }: FAQPageProps): JSX.Element {
  return (
    <>
      <Header />
      <Title>{RichText.asText(doc.data.title)}</Title>
      <CollapseGroup>
        {doc.data.questions.map((set: FAQSet) => (
          <Collapse key={uuid()} title={RichText.asText(set.question)}>
            <RichText {...richTextProps} render={set.answer} />
          </Collapse>
        ))}
      </CollapseGroup>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => ({
  props: await getPrismicProps<FAQData>('faq', context),
});
