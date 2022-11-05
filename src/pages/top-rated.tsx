import type { GetServerSideProps } from 'next';

import Container from '@/components/Container';
import Layout from '@/components/Layout';
import ListMovie from '@/components/ListMovie';
import Seo from '@/components/Seo';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { generateUrlMovieDb } from '@/lib/generateUrlMovieDb';
import type { Movie, ResponseMoviesDb } from '@/types/moviedb/movie';

interface TopRatedProps {
  movies: Movie[];
}

const TopRated = ({ movies }: TopRatedProps) => {
  const { dictionary, selectedLanguage } = useLanguageContext();

  return (
    <Layout>
      <Seo
        title={dictionary[selectedLanguage].topRated}
        description={dictionary[selectedLanguage].topRatedDescription}
        withSuffix
      />

      <Container>
        <ListMovie title={dictionary[selectedLanguage].topRated} movies={movies} />
      </Container>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const topRatedMovies: ResponseMoviesDb = await fetch(generateUrlMovieDb('/movie/top_rated')).then(
    (data) => data.json()
  );

  return {
    props: {
      movies: topRatedMovies.results
    }
  };
};

export default TopRated;
