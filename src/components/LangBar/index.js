import React from 'react';
import { LangContainer, Icon, CloseIcon, LangWrapper, LangLink } from './LangElements';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import i18next from 'i18next';

const LangBar = ({isOpen, toggle}) => {
    function changeLang(code) {
        i18next.changeLanguage(code);
        toggle();
    }

    return (
        <LangContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <LangWrapper id="langLinks">
                <LangLink onClick={() => changeLang("fr")}>Francais</LangLink>
                <LangLink onClick={() => changeLang("en")}>English</LangLink>
            </LangWrapper>
        </LangContainer>
    )
}
i18n
.use(initReactI18next)
.use(LanguageDetector)
.use(HttpApi)
.init({
    lng: "en",
    fallbackLng: "en",
    backend: {
        loadPath: '/bat-site/public/assets/locales/{{lng}}/translation.json'
    },
    react: {useSuspense: false}
});

export default LangBar;
