import CardMovie from '@/components/CardMovie';
import Container from '@/components/Container';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import Title from '@/components/Title';
import { useLanguageContext } from '@/contexts/LanguageContext';

const Upcoming = () => {
  const { dictionary, selectedLanguage } = useLanguageContext();

  return (
    <Layout>
      <Seo
        title={dictionary[selectedLanguage].upcoming}
        description="Web for viewing upcoming movies"
        withSuffix
      />

      <Container>
        <Title>{dictionary[selectedLanguage].upcoming}</Title>

        <div className="mt-5">
          <CardMovie />
        </div>
      </Container>
    </Layout>
  );
};

export default Upcoming;
