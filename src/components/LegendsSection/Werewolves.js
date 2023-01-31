import React from 'react';
import { Heading, LegendItem, LegendH1, LegendP, Box1, Box2, Box3 } from './LegendsElements';
import { useTranslation } from 'react-i18next';

const Werewolves = () => {
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
                    <Box1 onClick={() => click("p5")}>
                        <Box2>
                            <Heading>{t('legendH_5')}</Heading>
                        </Box2>
                        <Box3>
                            <LegendH1>{t('legendH1_5')}</LegendH1>
                        </Box3>
                    </Box1>
                    <div className="col2"><div onClick={() => click("p5")} className="cercle2"><div className="image2 imgE"></div></div>
                    </div>
                </div>
            <LegendP id="p5">{t('legendP5_1')}</LegendP>
            <LegendP id="p5">{t('legendP5_2')}
            </LegendP>
            <LegendP id="p5">{t('legendP5_3')}</LegendP>
        </LegendItem>
        
    )
}

export default Werewolves;