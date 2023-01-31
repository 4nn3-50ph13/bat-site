import React from 'react';
import { HelpContent, Instructions1, Instructions2, CanvasOutline } from './ExploreElements';
import { useTranslation } from 'react-i18next';

const Help = () => {
  const { t } = useTranslation();
  
    return (
        <>
            <HelpContent>
                <CanvasOutline id="canvas_outline">{t("exploreHelp2")}</CanvasOutline>
                <Instructions1>{t("exploreHelp1")}</Instructions1>
                <Instructions2>{t("exploreHelp3")}</Instructions2>
            </HelpContent>
        </>
    )
}

export default Help;
