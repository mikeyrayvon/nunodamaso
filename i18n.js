import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

export const i18nextInit = (router, namespaces = ['default']) => {
  if (!i18next.isInitialized) {
    i18next.use(initReactI18next).init({
      lng: router.locale,

      supportedLngs: router.locales,

      fallbackLng: router.defaultLocale,

      react: {
        useSuspense: false
      },

      resources: {}
    });
  }

  if (i18next.language !== router.locale) {
    i18next.changeLanguage(router.locale);
  }

  namespaces.forEach(ns => {
    if (!i18next.hasResourceBundle(router.locale, ns)) {
      const data = require(`./public/locales/${router.locale}/${ns}.json`);
      i18next.addResourceBundle(router.locale, ns, data);
    }
  });

  i18next.setDefaultNamespace(namespaces[0]);
};
