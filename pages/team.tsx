import React from 'react';
import Header from 'components/header';
import Footer from 'components/footer';
import Title from 'components/title';
import TeamMember from 'components/team-member';

import { getPrismicProps, Text, Link, Image, Document } from 'lib/prismic';
import { RichText } from 'prismic-reactjs';
import { GetStaticProps } from 'next';

interface Member {
  name: Text;
  position: Text;
  bio: Text;
  cta_link: Link;
  cta_label: Text;
  image: Image;
}

interface TeamData {
  members: Member[];
  title: Text;
}

interface TeamPageProps {
  doc: Omit<Document, 'data'> & { data: TeamData };
}

export default function TeamPage({ doc }: TeamPageProps): JSX.Element {
  return (
    <>
      <Header />
      <Title>{RichText.asText(doc.data.title)}</Title>
      {doc.data.members.map((member: Member, idx: number) => (
        <TeamMember
          name={RichText.asText(member.name)}
          title={RichText.asText(member.position)}
          bio={RichText.render(member.bio)}
          link={{ 
            label: RichText.asText(member.cta_label), 
            href: member.cta_link.url, 
          }}
          img={member.image.url}
          flipped={idx % 2 !== 0}
          gray={idx % 2 !== 0}
        />
      ))}
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => ({
  props: await getPrismicProps<TeamData>('team', context),
});
