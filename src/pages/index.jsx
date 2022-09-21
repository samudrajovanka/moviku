import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <p>Halaman halaman</p>

      <Link href="/profile">
        <a>Profile</a>
      </Link>

      <br />

      <Link href="/blogs/hot-news-bola">
        <a>Baca hot news bola</a>
      </Link>

      <br />

      <Link href="/blogs/berita-panas">
        <a>Baca berita panas</a>
      </Link>

      <br />

      <a href="https://androidupnvj.com" target="_blank" rel="noopener noreferrer">
        Android UPNVJ
      </a>
    </div>
  );
};

export default Home;
