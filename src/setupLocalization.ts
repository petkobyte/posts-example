import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
// TODO: import from public
import en from './resources/locales/en.json';

const resources = {
  en: {
    translation: en,
  },
};

i18next.use(initReactI18next).init({
  fallbackLng: 'en',
  resources,
});

export default i18next;
