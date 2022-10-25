/* eslint-disable no-shadow */
/* eslint-disable max-len */
import { generateUrlMovieDb } from 'libi/generateUrlMovieDb';

import Container from '@/components/Container';
import Layout from '@/components/Layout';
import ListMovie from '@/components/ListMovie';
import { useLanguageContext } from '@/contexts/LanguageContext';

const Home = ({ movies }) => {
  const { dictionary, selectedLanguage } = useLanguageContext();
  console.log(movies);

  return (
    <Layout>
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
