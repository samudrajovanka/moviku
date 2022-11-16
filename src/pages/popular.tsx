import Container from '@/components/Container';
import Layout from '@/components/Layout';
import ListMovie from '@/components/ListMovie';
import Seo from '@/components/Seo';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { generateUrlMovieDb } from '@/lib/generateUrlMovieDb';
import { gssp } from '@/services/gssp';
import type { Movie, ResponseMoviesDb } from '@/types/moviedb/movie';

interface PopularProps {
  movies: Movie[];
}

const Popular = ({ movies }: PopularProps) => {
  const { dictionary, selectedLanguage } = useLanguageContext();

  return (
    <Layout>
      <Seo
        title={dictionary[selectedLanguage].popular}
        description={dictionary[selectedLanguage].popularDescription}
        withSuffix
      />

      <Container>
        <ListMovie title={dictionary[selectedLanguage].popular} movies={movies} />
      </Container>
    </Layout>
  );
};

export const getServerSideProps = gssp(async (context) => {
  const language = context.lang;

  const popularMovies: ResponseMoviesDb = await fetch(
    generateUrlMovieDb('/movie/popular', { language })
  ).then((data) => data.json());

  return {
    props: {
      movies: popularMovies.results
    }
  };
});

export default Popular;
