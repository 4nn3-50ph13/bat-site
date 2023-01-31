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
                    <Box1 onClick={() => click("p4")}>
                        <Box2>
                            <Heading>{t('legendH_4')}</Heading>
                        </Box2>
                        <Box3>
                            <LegendH1>{t('legendH1_4')}</LegendH1>
                        </Box3>
                    </Box1>
                    <div className="col2"><div onClick={() => click("p4")} className="cercle2"><div className="image2 imgD"></div></div>
                    </div>
                </div>
            <LegendP id="p4">{t('legendP4_1')}</LegendP>
            <LegendP id="p4">{t('legendP4_2')}
            </LegendP>
            <LegendP id="p4">{t('legendP4_3')}</LegendP>
        </LegendItem>
        
    )
}

export default Greece;