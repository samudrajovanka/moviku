import CardMovie from '@/components/CardMovie';
import Container from '@/components/Container';
import Layout from '@/components/Layout';
import Title from '@/components/Title';

const Home = () => {
  return (
    <Layout>
      <Container>
        <Title>Now Playing</Title>

        <div className="mt-5">
          <CardMovie />
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
