import React from 'react';
import NextLink from 'next/link';
import Prismic from 'prismic-javascript';

import { GetStaticPropsContext } from 'next';
import { 
  Link, 
  Document, 
  ApiOptions, 
  DocumentLink, 
  QueryOptions, 
  DefaultClient 
} from './types';

// Manages the url links to internal Prismic documents (this should return the
// actual link with *all* the dyanamic path segments filled).
export function linkResolver(link: DocumentLink): string {
  if (['faq', 'team', 'updates'].indexOf(link.type) >= 0) return link.type;
  return '/';
}

// Additional helper function for Next/Link component (this should return the 
// actual filename (e.g. `/posts/[uid]`)).
export function hrefResolver(link: DocumentLink): string {
  if (['faq', 'team', 'updates'].indexOf(link.type) >= 0) return link.type;
  return '/';
}

// Helper function to convert Prismic Rich Text links to Next/Link components.
export function serializeHyperlink(
  type: Link['link_type'], 
  element: { data: Link }, 
  content: React.ReactNode
): JSX.Element {
  switch (element.data.link_type) {
    case 'Document':
      return (
        /* eslint-disable jsx-a11y/anchor-is-valid */
        <NextLink 
          key={element.data.id} 
          href={hrefResolver(element.data)} 
          as={linkResolver(element.data)}
        >
          <a>{content}</a>
        </NextLink>
        /* eslint-enable jsx-a11y/anchor-is-valid */
      );
    default:
      return <a href={element.data.url}>{content}</a>;
  }
};

export const richTextProps = { linkResolver, serializeHyperlink }; 

// Injects the global accessToken variable into the request configuration.
function createClientOptions(req: unknown, accessToken: string): ApiOptions {
  const reqOption = req ? { req } : {};
  const accessTokenOption = accessToken ? { accessToken } : {};
  return { ...reqOption, ...accessTokenOption };
}

// Client method to query documents from the Prismic repo.
export function Client(req: unknown = null): DefaultClient {
  return Prismic.client(
    process.env.PRISMIC_API_ENDPOINT as string, 
    createClientOptions(req, process.env.PRISMIC_ACCESS_TOKEN as string)
  );
}

// Gets the document data for a given page.
export async function getPrismicProps<T>(
  page: string, 
  { preview, previewData }: GetStaticPropsContext
): Promise<{ doc: Omit<Document, 'data'> & { data: T } }> {
  const options: QueryOptions = preview ? previewData as QueryOptions : {};
  const client: DefaultClient = Client();
  const doc: Document = await client.getSingle(page, options);

  return { doc };
};
