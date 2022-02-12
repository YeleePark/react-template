import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "locales/en.json";
import ko from "locales/ko.json";

i18n.on("languageChanged", function (lng) {
  // if the language we switched to is the default language we need to remove the /en from URL
  if (lng === i18n.options.fallbackLng[0]) {
    if (window.location.pathname.includes("/" + i18n.options.fallbackLng[0])) {
      const newUrl = window.location.pathname.replace(
        "/" + i18n.options.fallbackLng[0],
        ""
      );
      window.location.replace(newUrl);
    }
  }
});
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      "en-US": {
        translations: en,
      },
      "ko-KR": {
        translations: ko,
      },
    },
    // fallbackLng: ['en', 'ko'],
    fallbackLng: [`ko-KR`, `en-US`],
    ns: [`translations`],
    defaultNS: `translations`,
    interpolation: {
      escapeValue: false,
    },
    debug: false,
    react: {
      useSuspense: false,
    },
    lng: "ko-KR",
  });

export default i18n;
