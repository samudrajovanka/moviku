import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { setCookie, getCookie } from 'cookies-next';
import { useRouter } from 'next/router';

import en from '@/constants/language/en.json';
import id from '@/constants/language/id.json';

import type { LanguageContextValue, LanguageProviderProps } from './types';
import { Language } from './types';

const LanguageContext = createContext<LanguageContextValue>({} as LanguageContextValue);

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(Language.EN);
  const router = useRouter();

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
    const languageFromCookie = getCookie('lang');

    if (languageFromCookie) {
      setSelectedLanguage(languageFromCookie as Language);
    }
  }, []);

  const changeLanguage: LanguageContextValue['changeLanguage'] = useCallback(
    (languageKey) => {
      if (languageKey === selectedLanguage) return;

      setSelectedLanguage(languageKey);

      setCookie('lang', languageKey);

      router.reload();
    },
    [router, selectedLanguage]
  );

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
