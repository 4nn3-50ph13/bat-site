import React from 'react';
import { LegendsContainer, LegendsBg, Heading, Subtitle } from './LegendsElements';
import Nosferatu from './Nosferatu';
import Dracula from './Dracula';
import Greece from './Greece';
import Werewolves from './Werewolves';
import LegendsIntro from './LegendsIntro';

const LegendsSection = () => {
    
    return (
        <LegendsContainer id="legends">
            <Heading style={{
                    fontFamily: 'Raleway',
                    marginTop: '250px',
                    marginLeft: '200px',
                    transform: 'none'
                }}>Legends and myths</Heading>
            <Subtitle style={{
                    marginLeft: '200px',
                    transform: 'none'
                }}>surrounding bats</Subtitle>
            <LegendsBg>
                <LegendsIntro/>
                <Nosferatu/>
                <Dracula/>
                <Greece/>
                <Werewolves/>
            </LegendsBg>
        </LegendsContainer>
    )
}

export default LegendsSection;