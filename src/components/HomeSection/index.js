import React from 'react';
import { HomeContainer, HomeBg, HomeContent, HomeP } from './HomeElements';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';

const HomeSection = () => {
    const { t } = useTranslation();
    const title = document.querySelectorAll('.title');
    const halfX = window.innerWidth / 2;
    const halfY = window.innerHeight / 2;
    
    title.forEach((el, i) => {
        gsap.to(el, {
        z: 1 * (i + 8) });
    
    });
    
    document.addEventListener('mousemove', e => {
    title.forEach((el, i) => {
        gsap.to(el, {
        x: (e.clientX - halfX) * (i + 1) * 0.01,
        y: (e.clientY - halfY) * (i + 1) * 0.01 });
    
    });
    });
    
    return (
        <HomeContainer id="home">
            <HomeBg>
            </HomeBg>
            <HomeContent>
                <HomeP>
                {t('overtitle')}
                </HomeP>
                <div className="wrap">
                <div className="title">BATS</div>
                <div className="title">BATS</div>
                <div className="title">BATS</div>
                <div className="title">BATS</div>
                <div className="title">BATS</div>
                <div className="title">BATS</div>
                <div className="title">BATS</div>
                <div className="title">BATS</div>
                <div className="title">BATS</div>
                <div className="title">BATS</div>
                </div>
                <HomeP>
                {t('subtitle')}
                </HomeP>
            </HomeContent>
        </HomeContainer>
    )
}

export default HomeSection
