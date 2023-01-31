import React from 'react';
import { Heading, LegendItem, LegendH1, LegendP, Box1, Box2, Box3 } from './LegendsElements';
import { useTranslation } from 'react-i18next';

const Dracula = () => {
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
                    <Box1 onClick={() => click("p3")}>
                        <Box2>
                            <Heading>{t('legendH_3')}</Heading>
                        </Box2>
                        <Box3>
                            <LegendH1>{t('legendH1_3')}</LegendH1>
                        </Box3>
                    </Box1>
                    <div className="col2"><div onClick={() => click("p3")} className="cercle2"><div className="image2 imgC"></div></div>
                    </div>
                </div>
            <LegendP id="p3">{t('legendP3_1')}</LegendP>
            <LegendP id="p3">{t('legendP3_2')}
            </LegendP>
            <LegendP id="p3">{t('legendP3_3')}</LegendP>
        </LegendItem>
        
    )
}

export default Dracula;