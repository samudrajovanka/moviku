import Head from 'next/head';

import '@/assets/styles/globals.scss';
import { LanguageProvider } from '@/contexts/LanguageContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
        <meta name="description" content="Web for viewing movies" />
        <meta name="keyword" content="movie, trending, popular" />
        <meta property="og:title" content={process.env.NEXT_PUBLIC_APP_NAME} />
        <meta property="og:description" content="Web for viewing movies" />
      </Head>

      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </>
  );
}

export default MyApp;
