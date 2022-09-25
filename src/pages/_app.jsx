import Head from 'next/head';

import '@/assets/styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
