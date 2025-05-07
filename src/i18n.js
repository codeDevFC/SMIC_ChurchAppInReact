import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from './locales/en/common.json';
import svCommon from './locales/sv/common.json';
import enH2h from './locales/en/h2h.json';
import svH2h from './locales/sv/h2h.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { 
        translation: enCommon,
        h2h: enH2h
      },
      sv: { 
        translation: svCommon,
        h2h: svH2h
      },
    },
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'path', 'navigator'],
      lookupFromPathIndex: 0,
      caches: ['localStorage'],
    },
    interpolation: { 
      escapeValue: false 
    },
    react: {
      useSuspense: true,
      wait: true
    }
  });

export default i18n;
