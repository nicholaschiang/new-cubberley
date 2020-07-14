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

export interface DocumentLink {
  link_type: 'Document';
  slug: string;
  tags: string[];
  type: string;
  isBroken: boolean;
  lang: string;
  id: string;
}

export interface MediaLink {
  link_type: 'Media';
  kind: string;
  height: number;
  width: number;
  size: number;
  name: string;
  url: string;
}

export interface WebLink {
  link_type: 'Web';
  target?: '_blank';
  url: string;
}

export type Link = DocumentLink | MediaLink | WebLink;

export interface BannerSlice {
  content: Text;
}

export interface SpotlightSlice {
  label: Text;
  title: Text;
  content: Text;
  image: Image;
  cta_link: Link;
  cta_label: Text;
}

export interface TeamMemberSlice {
  name: Text;
  position: Text;
  bio: Text;
  image: Image;
  cta_link: Link;
  cta_label: Text;
}

export interface Slice {
  items: Record<string, any>[];
  primary: BannerSlice | SpotlightSlice | TeamMemberSlice;
  slice_label: string | null;
  slice_type: string;
}
