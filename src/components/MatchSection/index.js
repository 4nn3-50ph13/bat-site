import React from 'react';
import { MatchContainer, MatchContent, Heading, Subtitle, Question, BtnQuestion, BtnGroup, BtnTitle, BtnIcon, Box1, Box2, Box3, Box4, ShowResults, Result, ResDiv, MatchH3 } from './MatchElements';
import { useTranslation } from 'react-i18next';
import { WiMoonAltWaningCrescent6, WiMoonAltWaningCrescent1, WiMoonAltWaningGibbous1 } from 'react-icons/wi';
import { MdWbSunny } from 'react-icons/md';
import { GiMeat, GiFruitBowl, GiCaveEntrance, GiForest } from 'react-icons/gi';

const MatchSection = () => {
    const { t } = useTranslation();
    const [show, showRes] = React.useState(false);
    const bats = [t("resultBat1"), t("resultBat2"), t("resultBat3")];
    const [total, changeTotal] = React.useState(0);
    const [answered, changeAnswered] = React.useState(0);
    const [bat, setBat] = React.useState(bats[0]);

    function showR() {
        if(answered<3){
            alert(t("alert"));
        }else{
            if(total===3){
                setBat(bats[0])
            }
            else if(total<6){
                setBat(bats[1])
            }
            else if(total===6){
                setBat(bats[2])
            }
            if(show) {
                document.getElementById("button-2a").style.width="200px";
                document.getElementById("res-btn").style.backgroundColor="#bfbfc7"
                document.getElementById("res-btn").style.width="150px";
                showRes(false);
            } else {
                document.getElementById("button-2a").style.width="100%";
                document.getElementById("res-btn").style.width="70%";
                document.getElementById("res-btn").style.backgroundColor= "#d65a31";
                showRes(true);
            }
        }
    }

    function boxClick(id1, id2) {
        changeAnswered(answered+1);
        if(id1 === "btn-left1"){
            changeTotal(total+2);
        } else if(id1 === "btn-left2"){
            changeTotal(total+1);
        } else if(id1 === "btn-left3"){
            changeTotal(total+2);
        } else if(id1 === "btn-right1"){
            changeTotal(total+1);
        } else if(id1 === "btn-right2"){
            changeTotal(total+2);
        } else if(id1 === "btn-right3"){
            changeTotal(total+1);
        }
        document.getElementById(id1).style.backgroundColor= "#d65a31";
        document.getElementById(id2).style.backgroundColor= "#19181C";
        document.getElementById(id1).style.width= "100%";
        document.getElementById(id2).style.width= "50%";
    }

    return (
        <MatchContainer id="match">
            <MatchContent>
                <Heading>{t("matchH")}</Heading>
                <Subtitle>{t("matchS")}</Subtitle>
                <Box1><Box2><Question>{t("q1")}</Question></Box2></Box1>
                <Box3>
                    <BtnGroup>
                        <BtnQuestion id="btn-left1" onClick={() => boxClick("btn-left1", "btn-right1")}><BtnTitle>{t("a_1a")}</BtnTitle>
                            <BtnIcon>
                                <WiMoonAltWaningCrescent6 style={{
                                    width: '20%',
                                    height: '50%',
                                    color: '#bfbfc7',
                                }}/>
                                <WiMoonAltWaningCrescent1 style={{
                                    width: '20%',
                                    height: '50%',
                                    color: '#bfbfc7',
                                }}/>
                                <WiMoonAltWaningGibbous1 style={{
                                    width: '20%',
                                    height: '50%',
                                    color: '#bfbfc7',
                                }}/>
                            </BtnIcon>
                        </BtnQuestion>
                        <BtnQuestion id="btn-right1" onClick={() => boxClick("btn-right1", "btn-left1")}>
                            <BtnTitle>{t("a_1b")}</BtnTitle>
                            <BtnIcon>
                            <MdWbSunny style={{
                                    width: '20%',
                                    height: '50%',
                                    color: '#bfbfc7'
                                }}/>
                        </BtnIcon>
                        </BtnQuestion>
                    </BtnGroup>
                </Box3>
                <Box1><Box2><Question>{t("q2")}</Question></Box2></Box1>
                <Box3>
                    <BtnGroup>
                        <BtnQuestion id="btn-left2" onClick={() => boxClick("btn-left2", "btn-right2")}><BtnTitle>{t("a_2a")}</BtnTitle>
                            <BtnIcon>
                                <GiFruitBowl style={{
                                    width: '20%',
                                    height: '50%',
                                    color: '#bfbfc7',
                                }}/>
                            </BtnIcon>
                        </BtnQuestion>
                        <BtnQuestion id="btn-right2" onClick={() => boxClick("btn-right2", "btn-left2")}>
                            <BtnTitle>{t("a_2b")}</BtnTitle>
                            <BtnIcon>
                            <GiMeat style={{
                                    width: '20%',
                                    height: '50%',
                                    color: '#bfbfc7'
                                }}/>
                        </BtnIcon>
                        </BtnQuestion>
                    </BtnGroup>
                </Box3>
                <Box1><Box2><Question>{t("q3")}</Question></Box2></Box1>
                <Box3>
                    <BtnGroup>
                        <BtnQuestion id="btn-left3" onClick={() => boxClick("btn-left3", "btn-right3")}><BtnTitle>{t("a_3a")}</BtnTitle>
                            <BtnIcon>
                                <GiCaveEntrance style={{
                                    width: '20%',
                                    height: '50%',
                                    color: '#bfbfc7',
                                }}/>
                            </BtnIcon>
                        </BtnQuestion>
                        <BtnQuestion id="btn-right3" onClick={() => boxClick("btn-right3", "btn-left3")}>
                            <BtnTitle>{t("a_3b")}</BtnTitle>
                            <BtnIcon>
                            <GiForest style={{
                                    width: '20%',
                                    height: '50%',
                                    color: '#bfbfc7'
                                }}/>
                        </BtnIcon>
                        </BtnQuestion>
                    </BtnGroup>
                </Box3>
            <ResDiv>
                <Box4 id="button-2a"><ShowResults id="res-btn" onClick={showR}>{t("resultButton")}</ShowResults></Box4>
                <Result show={show}>
                    <MatchH3>{bat}</MatchH3>
                    {t("reslutContent")}
                    </Result>
            </ResDiv>
            </MatchContent>
        </MatchContainer>
    )
}

export default MatchSection