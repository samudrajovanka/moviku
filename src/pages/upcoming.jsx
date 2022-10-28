import Container from '@/components/Container';
import Layout from '@/components/Layout';
import ListMovie from '@/components/ListMovie';
import Seo from '@/components/Seo';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { generateUrlMovieDb } from '@/lib/generateUrlMovieDb';

const UpcomingPage = ({ movies }) => {
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
export async function getServerSideProps() {
  const upcomingMovies = await fetch(generateUrlMovieDb('/movie/upcoming')).then((data) =>
    data.json()
  );

  return {
    props: {
      movies: upcomingMovies.results
    }
  };
}
export default UpcomingPage;
