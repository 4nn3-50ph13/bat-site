import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#d65a31' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: 0.7s;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    z-index: 1;
`

export const NavLogo = styled(LinkR)`
    color: #19181C;   
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    margin-left: 24px;
    text-decoration: none;
    font-family: 'Megrim', cursive;
    letter-spacing: 4px;
`

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display:block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px;
    width: 100%;
`

export const NavLinks = styled(LinkS)`
    color: #19181C;
    display: flex;
    align-items: center;
    padding: 0.1rem;
    height: 100%;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 3px;
    margin-left: auto;
    margin-right: auto;
    text-decoration: none;

    &.active {
        border-bottom: 3px solid #141629;
    }
`

export const LangBtn = styled.button`
    display: flex;
    align-items: center;
    width:50px;
    height: 50px;
    background: black;
    border-radius: 25px;
    padding: 10px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-top: auto;
    margin-bottom: auto;

    @media screen and (max-width: 768px) {
        display: none;
    }
`