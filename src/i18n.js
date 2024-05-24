import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend"

i18n.use(LanguageDetector).use(initReactI18next).use(HttpBackend).init({
    debugger: true,
    fallbackLng: 'en',
    lang: navigator.language.split('-')[0],
    returnObjects: true,
    ns: ['login']
})