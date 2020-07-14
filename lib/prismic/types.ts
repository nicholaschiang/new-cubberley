import { RichTextBlock } from 'prismic-reactjs';

export type { QueryOptions } from 'prismic-javascript/types/ResolvedApi';
export type { ApiOptions } from 'prismic-javascript/types/Api';
export type { Document } from 'prismic-javascript/types/documents';
export type { DefaultClient } from 'prismic-javascript/types/client';

export type Text = RichTextBlock[];

export interface Image {
  alt?: string;
  copyright?: string;
  dimensions: { width: number; height: number };
  url: string;
}

export interface Link {
  link_type: string;
  target?: string;
  url: string;
}

export interface BannerSlice {
  content: Text;
}

export interface SpotlightSlice {
  label: Text;
  title: Text;
  content: Text;
  cta_link: Link;
  cta_label: Text;
  image: Image;
}

export interface TeamMemberSlice {
  name: Text;
  position: Text;
  bio: Text;
  image: Image;
}

export interface Slice {
  items: Record<string, any>[];
  primary: BannerSlice | SpotlightSlice | TeamMemberSlice;
  slice_label: string | null;
  slice_type: string;
}
