import Container from '@/components/Container';
import Layout from '@/components/Layout';
import ListMovie from '@/components/ListMovie';
import Seo from '@/components/Seo';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { generateUrlMovieDb } from '@/lib/generateUrlMovieDb';
import { gssp } from '@/services/gssp';
import type { Movie, ResponseMoviesDb } from '@/types/moviedb/movie';

interface UpcomingPageProps {
  movies: Movie[];
}

const UpcomingPage = ({ movies }: UpcomingPageProps) => {
  const { dictionary, selectedLanguage } = useLanguageContext();

  return (
    <Layout>
      <Seo
        title={dictionary[selectedLanguage].upcoming}
        description={dictionary[selectedLanguage].upcomingDescription}
        withSuffix
      />

      <Container>
        <ListMovie title={dictionary[selectedLanguage].upcoming} movies={movies} />
      </Container>
    </Layout>
  );
};

export const getServerSideProps = gssp(async (context) => {
  const language = context.lang;

  const upcomingMovies: ResponseMoviesDb = await fetch(
    generateUrlMovieDb('/movie/upcoming', { language })
  ).then((data) => data.json());

  return {
    props: {
      movies: upcomingMovies.results
    }
  };
});

export default UpcomingPage;
