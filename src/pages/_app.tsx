import type { AppProps } from 'next/app';
import Head from 'next/head';

import { LanguageProvider } from '@/contexts/LanguageContext';

import '@/assets/styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
      </Head>

      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </>
  );
}

export default MyApp;
