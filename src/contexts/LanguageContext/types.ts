import type React from 'react';

export enum Language {
  EN = 'en',
  ID = 'id'
}

export type LanguageContextValue = {
  selectedLanguage: Language;
  changeLanguage: (selectedLanguage: Language) => void;
  language: { [key in Language]: string };
  dictionary: { [key in Language]: { [key: string]: string } };
};

export type LanguageProviderProps = {
  children: React.ReactNode;
};
