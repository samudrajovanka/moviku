import { generateUrlMovieDb } from 'lib/generateUrlMovieDb';

import CardMovie from '@/components/CardMovie';
import Container from '@/components/Container';
import Layout from '@/components/Layout';
import Title from '@/components/Title';
import ListTopRated from '@/components/ListTopRated';
import { useLanguageContext } from '@/contexts/LanguageContext';

const TopRated = ({ movies }) => {
  const { dictionary, selectedLanguage } = useLanguageContext();

  return (
    <Layout>
      <Container>
        <Title>{dictionary[selectedLanguage].topRated}</Title>
        <ListTopRated title={dictionary[selectedLanguage].nowPlaying} movies={movies} />
        <div className="mt-5">
          <CardMovie />
        </div>
      </Container>
    </Layout>
  );
};
export async function getServerSideProps() {
  const nowPlayingMovies = await fetch(generateUrlMovieDb('/movie/top_rated')).then((data) =>
    data.json()
  );
  return {
    props: {
      movies: nowPlayingMovies.results
    }
  };
}
export default TopRated;
