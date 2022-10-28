import Head from 'next/head';

import '@/assets/styles/globals.scss';
import { LanguageProvider } from '@/contexts/LanguageContext';

function MyApp({ Component, pageProps }) {
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
