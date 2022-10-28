import Container from '@/components/Container';
import Layout from '@/components/Layout';
import ListMovie from '@/components/ListMovie';
import Seo from '@/components/Seo';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { generateUrlMovieDb } from '@/lib/generateUrlMovieDb';

const Popular = ({ movies }) => {
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

export async function getServerSideProps() {
  const PopularMovies = await fetch(generateUrlMovieDb('/movie/popular')).then((data) =>
    data.json()
  );

  return {
    props: {
      movies: PopularMovies.results
    }
  };
}

export default Popular;
