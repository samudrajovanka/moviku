import { generateUrlMovieDb } from 'lib/generateUrlMovieDb';

import CardMovie from '@/components/CardMovie';
import Container from '@/components/Container';
import Layout from '@/components/Layout';
import ListMovie from '@/components/ListMovie';
import Title from '@/components/Title';
import { useLanguageContext } from '@/contexts/LanguageContext';

const TopRated = ({ movies }) => {
  const { dictionary, selectedLanguage } = useLanguageContext();

  return (
    <Layout>
      <Container>
        <Title>{dictionary[selectedLanguage].topRated}</Title>

        <ListMovie title={dictionary[selectedLanguage].nowPlaying} movies={movies} />

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
