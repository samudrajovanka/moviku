import Head from 'next/head';

interface SeoProps {
  title: string;
  description: string;
  withSuffix?: boolean;
}

const Seo = ({ title, description, withSuffix = false }: SeoProps) => {
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
