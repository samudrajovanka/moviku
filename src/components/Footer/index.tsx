import { useLanguageContext } from '@/contexts/LanguageContext';

const Footer = () => {
  const { dictionary, selectedLanguage } = useLanguageContext();

  return (
    <footer className="bg-green-500 heading-3 text-white py-5 text-center dark:bg-zinc-800">
      {dictionary[selectedLanguage].footer}{' '}
      <a href="https://www.themoviedb.org/" className="underline">
        The Movie DB
      </a>
    </footer>
  );
};

export default Footer;
