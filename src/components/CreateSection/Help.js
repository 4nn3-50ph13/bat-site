import React from 'react';
import { HelpContent, Instructions1, Instructions2, CanvasOutline } from './CreateElements';
import { useTranslation } from 'react-i18next';

const Help = () => {
  const { t } = useTranslation();
  
    return (
        <>
            <HelpContent>
                <Instructions1>{t("createHelp1")}</Instructions1>
                <CanvasOutline id="canvas_outline">{t("createHelp2")}</CanvasOutline>
                <Instructions2>{t("createHelp3")}</Instructions2>
            </HelpContent>
        </>
    )
}

export default Help;
