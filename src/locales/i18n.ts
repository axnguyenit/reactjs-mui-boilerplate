import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import enLocales from './en.json';
import viLocales from './vi.json';
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translations: enLocales },
      vi: { translations: viLocales },
    },
    lng: localStorage.getItem('i18n') || 'en',
    fallbackLng: 'en',
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['queryString', 'cookie'],
      caches: ['cookie'],
    },
  });

export { default } from 'i18next';
