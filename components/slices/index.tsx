import React from 'react';
import Banner from 'components/banner';
import Spotlight from 'components/spotlight';
import TeamMember from 'components/team-member';

import { v4 as uuid } from 'uuid';
import { Link, RichText } from 'prismic-reactjs';
import {
  linkResolver,
  richTextProps, 
  Slice, 
  BannerSlice, 
  SpotlightSlice, 
  TeamMemberSlice 
} from 'lib/prismic';

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
                cta={{ 
                  label: RichText.asText(data.cta_label),
                  href: Link.url(data.cta_link, linkResolver),
                }}
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
                bio={<RichText {...richTextProps} render={data.bio} />}
                img={data.image.url}
                link={{ 
                  label: RichText.asText(data.cta_label),
                  href: Link.url(data.cta_link, linkResolver),
                }}
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
