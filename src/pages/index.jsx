import CardMovie from '@/components/CardMovie';
import Title from '@/components/Title';

const Home = () => {
  return (
    <div>
      <Title>Now Playing</Title>

      <div className="mt-5">
        <CardMovie />
      </div>
    </div>
  );
};

export default Home;
