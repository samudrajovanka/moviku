import Head from 'next/head';

import '@/assets/styles/globals.css';

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
