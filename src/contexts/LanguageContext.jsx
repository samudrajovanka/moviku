import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import en from '@/constants/language/en.json';
import id from '@/constants/language/id.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const language = useMemo(
    () => ({
      en: 'English',
      id: 'Indonesia'
    }),
    []
  );
  const dictionary = useMemo(
    () => ({
      en,
      id
    }),
    []
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const languageFromStorage = localStorage.getItem('lang');

      if (languageFromStorage) {
        setSelectedLanguage(languageFromStorage);
      }
    }
  }, []);

  const changeLanguage = useCallback((languageKey) => {
    setSelectedLanguage(languageKey);

    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', languageKey);
    }
  }, []);

  const value = useMemo(
    () => ({
      selectedLanguage,
      changeLanguage,
      language,
      dictionary
    }),
    [changeLanguage, dictionary, language, selectedLanguage]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguageContext = () => useContext(LanguageContext);
