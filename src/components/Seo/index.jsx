import Head from 'next/head';

const Seo = ({ title, description, withSuffix }) => {
  const fullTitle = withSuffix ? `${title} | ${process.env.NEXT_PUBLIC_APP_NAME}` : title;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content="movie, trending, popular" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
    </Head>
  );
};

export default Seo;
