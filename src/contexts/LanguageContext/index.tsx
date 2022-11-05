import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import en from '@/constants/language/en.json';
import id from '@/constants/language/id.json';

import type { LanguageContextValue, LanguageProviderProps } from './types';
import { Language } from './types';

const LanguageContext = createContext<LanguageContextValue>({} as LanguageContextValue);

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(Language.EN);

  const language: LanguageContextValue['language'] = useMemo(
    () => ({
      en: 'English',
      id: 'Indonesia'
    }),
    []
  );

  const dictionary: LanguageContextValue['dictionary'] = useMemo(
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
        setSelectedLanguage(languageFromStorage as Language);
      }
    }
  }, []);

  const changeLanguage: LanguageContextValue['changeLanguage'] = useCallback((languageKey) => {
    setSelectedLanguage(languageKey);

    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', languageKey);
    }
  }, []);

  const value: LanguageContextValue = useMemo(
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
