import Container from '@/components/Container';
import Layout from '@/components/Layout';
import ListMovie from '@/components/ListMovie';
import Seo from '@/components/Seo';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { generateUrlMovieDb } from '@/lib/generateUrlMovieDb';
import { gssp } from '@/services/gssp';
import type { ResponseMoviesDb, Movie } from '@/types/moviedb/movie';

interface HomeProps {
  movies: Movie[];
}

const Home = ({ movies }: HomeProps) => {
  const { dictionary, selectedLanguage } = useLanguageContext();
  return (
    <Layout>
      <Seo
        title={process.env.NEXT_PUBLIC_APP_NAME as string}
        description={dictionary[selectedLanguage].homeDescription}
      />

      <Container>
        <ListMovie title={dictionary[selectedLanguage].nowPlaying} movies={movies} />
      </Container>
    </Layout>
  );
};

export const getServerSideProps = gssp(async (context) => {
  const language = context.lang;

  const nowPlayingMovies: ResponseMoviesDb = await fetch(
    generateUrlMovieDb('/movie/now_playing', { language })
  ).then((data) => data.json());

  return {
    props: {
      movies: nowPlayingMovies.results
    }
  };
});

export default Home;
