/* eslint-disable max-len */
import Image from 'next/image';

import spidermanImg from '@/assets/images/spiderman.png';
import CardMovie from '@/components/CardMovie';
import Container from '@/components/Container';
import Layout from '@/components/Layout';
import Title from '@/components/Title';
import { useLanguageContext } from '@/contexts/LanguageContext';

const Home = () => {
  const { dictionary, selectedLanguage } = useLanguageContext();

  return (
    <Layout>
      <Container>
        <Title>{dictionary[selectedLanguage].nowPlaying}</Title>

        <Image src={spidermanImg} alt="spiderman" placeholder="blur" />
        <Image
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80"
          alt="spiderman"
          width={400}
          height={300}
          placeholder="blur"
          blurDataURL="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=10&q=10"
        />

        <div className="mt-5">
          <CardMovie />
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
