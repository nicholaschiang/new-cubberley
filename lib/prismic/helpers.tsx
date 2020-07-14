import React from 'react';
import Link from 'next/link';
import Prismic from 'prismic-javascript';

import { GetStaticPropsContext } from 'next';
import { QueryOptions, Document, ApiOptions, DefaultClient } from './types';

// Manages the url links to internal Prismic documents.
function linkResolver(doc: Document): string {
  if (doc.type === 'page') return `/${doc.uid as string}`;
  return '/';
}

// Additional helper function for Next/Link component.
function hrefResolver(doc: Document): string {
  if (doc.type === 'page') return '/[uid]';
  return '/';
}

// Helper function to convert Prismic Rich Text links to Next/Link components.
export function CustomLink(
  type: string, 
  element: { data: Document }, 
  content: React.ReactNode
): JSX.Element {
  return (
    /* eslint-disable jsx-a11y/anchor-is-valid */
    <Link 
      key={element.data.id} 
      href={hrefResolver(element.data)} 
      as={linkResolver(element.data)}
    >
      <a>{content}</a>
    </Link>
    /* eslint-enable jsx-a11y/anchor-is-valid */
  );
};

// Injects the global accessToken variable into the request configuration.
function createClientOptions(req: unknown, accessToken: string): ApiOptions {
  const reqOption = req ? { req } : {};
  const accessTokenOption = accessToken ? { accessToken } : {};
  return { ...reqOption, ...accessTokenOption };
}

// Client method to query documents from the Prismic repo.
export function Client(req: unknown = null): DefaultClient {
  
  console.log('[DEBUG] API endpoint:', process.env.PRISMIC_API_ENDPOINT);
  console.log('[DEBUG] Access token:', process.env.PRISMIC_ACCESS_TOKEN);

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
