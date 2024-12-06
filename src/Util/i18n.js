import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // Load translations from files
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Initialize with React
  .init({
    fallbackLng: 'en', // Default language
    debug: false, // Enable console logs for debugging
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to translation files
    },
  });

export default i18n;
