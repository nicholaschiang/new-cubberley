import React from 'react';
import Banner from 'components/banner';
import Spotlight from 'components/spotlight';
import TeamMember from 'components/team-member';

import { v4 as uuid } from 'uuid';
import { RichText } from 'prismic-reactjs';
import { Slice, BannerSlice, SpotlightSlice, TeamMemberSlice } from 'lib/prismic';

interface SlicesProps {
  slices: Slice[];
}

export default function Slices({ slices }: SlicesProps): JSX.Element {
  let spotlightStyled = false;

  return (
    <>
      {slices.map((slice: Slice) => {
        let data;
        switch (slice.slice_type) {
          case 'banner': 
            data = slice.primary as BannerSlice;
            spotlightStyled = false;
            return <Banner key={uuid()}>{RichText.render(data.content)}</Banner>;
          case 'spotlight_image': 
            data = slice.primary as SpotlightSlice;
            spotlightStyled = !spotlightStyled;
            return (
              <Spotlight
                headline={RichText.asText(data.title)}
                body={RichText.asText(data.content)}
                label={RichText.asText(data.label)}
                img={data.image.url}
                cta={{ label: 'Learn more', href: 'https://example.com' }}
                flipped={!spotlightStyled}
                gray={!spotlightStyled}
                key={uuid()}
              />
            );
          case 'team_member': 
            data = slice.primary as TeamMemberSlice;
            spotlightStyled = !spotlightStyled;
            return (
              <TeamMember
                name={RichText.asText(data.name)}
                title={RichText.asText(data.position)}
                bio={RichText.render(data.bio)}
                img={data.image.url}
                link={{ label: 'Learn more', href: 'https://example.com' }}
                flipped={!spotlightStyled}
                gray={!spotlightStyled}
                key={uuid()} 
              />
            );
          default: 
            return <></>;
        }
      })}
    </>
  );
}
