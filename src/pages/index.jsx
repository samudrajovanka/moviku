import Container from '@/components/Container';
import Layout from '@/components/Layout';
import ListMovie from '@/components/ListMovie';
import Seo from '@/components/Seo';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { generateUrlMovieDb } from '@/lib/generateUrlMovieDb';

const Home = ({ movies }) => {
  const { dictionary, selectedLanguage } = useLanguageContext();

  return (
    <Layout>
      <Seo
        title={process.env.NEXT_PUBLIC_APP_NAME}
        description={dictionary[selectedLanguage].homeDescription}
      />

      <Container>
        <ListMovie title={dictionary[selectedLanguage].nowPlaying} movies={movies} />
      </Container>
    </Layout>
  );
};

export async function getServerSideProps() {
  const nowPlayingMovies = await fetch(generateUrlMovieDb('/movie/now_playing')).then((data) =>
    data.json()
  );
  return {
    props: {
      movies: nowPlayingMovies.results
    }
  };
}

export default Home;
