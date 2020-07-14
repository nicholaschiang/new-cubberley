import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

import { AppProps } from 'next/app';

import 'styles/global.scss';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const timeoutId = React.useRef<ReturnType<typeof setTimeout>>();

  Object.entries({
    routeChangeStart: () => {
      // Only show loader if page transition takes longer than 0.5sec.
      timeoutId.current = setTimeout(() => NProgress.start(), 500);
    },
    routeChangeComplete: () => NProgress.done(),
    routeChangeError: () => NProgress.done(),
  }).forEach(([event, action]) =>
    Router.events.on(event, () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
        timeoutId.current = undefined;
      }
      action();
    })
  );

  return (
    <>
      <Head>
        <title>New Cubberley</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
