import React from 'react';
import { Heading, LegendItem, LegendH1, LegendP, Box1, Box2, Box3 } from './LegendsElements';
import { useTranslation } from 'react-i18next';

const LegendsIntro = () => {
    const { t } = useTranslation();
    const [isOpen, isClicked] = React.useState(false);

    function click(id) {
        if(isOpen){
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
                <Box1 onClick={() => click("p1")}>
                    <Box2>
                        <Heading>{t('legendH_1')}</Heading>
                    </Box2>
                    <Box3>
                        <LegendH1>{t('legendH1_1')}</LegendH1>
                    </Box3>
                </Box1>
                <div className="col2"><div onClick={() => click("p1")} className="cercle2"><div className="image2 imgA"></div></div>
                </div>
            </div>
            <LegendP isOpen={isOpen} id="p1">{t('legendP1_1')}
            </LegendP>
            <LegendP isOpen={isOpen} id="p1">{t('legendP1_2')}
            </LegendP>
            <LegendP isOpen={isOpen} id="p1">{t('legendP1_3')}
            </LegendP>
        </LegendItem>
    )
}

export default LegendsIntro;