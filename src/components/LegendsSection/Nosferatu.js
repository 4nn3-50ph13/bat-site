import React from 'react';
import { Heading, LegendItem, LegendH1, LegendP, Box1, Box2, Box3 } from './LegendsElements';
import { useTranslation } from 'react-i18next';

const Greece = () => {
    const { t } = useTranslation();
    const [clickedState, isClicked] = React.useState(false);

    function click(id) {
        if(clickedState){
            document.getElementById(id).style.display = "none";
            isClicked(false);
        } else {
            document.getElementById(id).style.display = "block";
            isClicked(true);
        }
    }
    
    return (
        <LegendItem>
            <div className="titleGrid">
                    <Box1 onClick={() => click("p2")}>
                        <Box2>
                            <Heading>{t('legendH_2')}</Heading>
                        </Box2>
                        <Box3>
                            <LegendH1>{t('legendH1_2')}</LegendH1>
                        </Box3>
                    </Box1>
                    <div className="col2"><div onClick={() => click("p2")} className="cercle2"><div className="image2 imgB"></div></div>
                    </div>
                </div>
            <LegendP id="p2">{t('legendP2_1')}</LegendP>
            <LegendP id="p2">{t('legendP2_2')}
            </LegendP>
            <LegendP id="p2">{t('legendP2_3')}</LegendP>
        </LegendItem>
        
    )
}

export default Greece;