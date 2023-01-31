import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const LangContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 30%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`

export const CloseIcon = styled(FaTimes)`
    color: #bfbfc7;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    cursor: pointer;
    outline: none;
    font-size: 2rem;
`

export const LangWrapper = styled.div`

`

export const LangLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    width: fit-content;
    margin: auto;
    padding: 30px;
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const LangRoute = styled(LinkR)`
    boorder-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &.hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`