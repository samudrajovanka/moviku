import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { LanguageProvider } from '@/contexts/LanguageContext';

import '@/assets/styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem attribute="class">
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
      </Head>

      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default MyApp;
