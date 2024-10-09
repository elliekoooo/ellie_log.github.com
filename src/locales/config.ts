import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en/en.json'
import ko from './ko/ko.json';
import { defaultLang } from 'store/store';

i18next
  .use(initReactI18next)
  .init({
  lng: defaultLang, // if you're using a language detector, do not define the lng option
  //fallbackLng: 'en',
  debug: false,
  resources: {
    en: {
      en
    },
    ko: {
      ko
    },
  }
  // if you see an error like: "Argument of type 'DefaultTFuncReturn' is not assignable to parameter of type xyz"
  // set returnNull to false (and also in the i18next.d.ts options)
  // returnNull: false,
});