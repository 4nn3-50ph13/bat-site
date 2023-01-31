import React, { useState, useEffect } from 'react'
import { IoLanguageOutline } from 'react-icons/io5';
import { Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinks, LangBtn } from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const Navbar = ({toggle}) => {
    const { t } = useTranslation();
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= window.innerHeight-140) {
            setScrollNav(true)
        }else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo
                        id="navLogo"
                        to="home"
                        onClick={toggleHome}
                        >BATS
                    </NavLogo>
                    <NavMenu>
                        <NavItem id="langLinks">
                            <NavLinks 
                            id="l1"
                            className="navLink"
                            to="home"
                            smooth='true'
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-100}
                            >{t('l1')}</NavLinks>
                        </NavItem>
                        <NavItem id="langLinks">
                            <NavLinks 
                            id="l2"
                            className="navLink"
                            to="legends"
                            smooth='true'
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-100}
                            >{t('l2')}</NavLinks>
                        </NavItem>
                        <NavItem id="langLinks">
                            <NavLinks 
                            id="l3"
                            className="navLink"
                            to="explore"
                            smooth='true'
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-100}
                            >{t('l3')}</NavLinks>
                        </NavItem>
                        <NavItem id="langLinks">
                            <NavLinks 
                            id="l4"
                            className="navLink"
                            to="create"
                            smooth='true'
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-100}
                            >{t('l4')}</NavLinks>
                        </NavItem>
                        <NavItem id="langLinks">
                            <NavLinks 
                            id="l5"
                            className="navLink"
                            to="match"
                            smooth='true'
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-100}
                            >{t('l5')}</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <LangBtn onClick={toggle}>
                        <IoLanguageOutline style={{
                            width: '100%',
                            height: '100%',
                            color: '#bfbfc7',
                        }}/>
                    </LangBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
