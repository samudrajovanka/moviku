import CardMovie from '@/components/CardMovie';
import Container from '@/components/Container';
import Layout from '@/components/Layout';
import Title from '@/components/Title';
import { useLanguageContext } from '@/contexts/LanguageContext';

const TopRated = () => {
  const { dictionary, selectedLanguage } = useLanguageContext();

  return (
    <Layout>
      <Container>
        <Title>{dictionary[selectedLanguage].topRated}</Title>

        <div className="mt-5">
          <CardMovie />
        </div>
      </Container>
    </Layout>
  );
};

export default TopRated;
