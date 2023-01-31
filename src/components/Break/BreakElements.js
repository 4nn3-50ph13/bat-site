import styled from 'styled-components';

export const BreakContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 900px;
    width: 100%;
    padding-left: 20px;
    z-index: 1;
`

export const BreakContent = styled.div`
    position: absolute;
    top: ${window.innerHeight/3}px;
    right: 90px;
    width: fit-content;
    height: fit-content;
`

export const Box1 = styled.div`
    z-index: 4;
    transform: skewY(2deg);
    background-color: #d65a31;
    width: fit-content;
    height: fit-content;
    padding: 20px 30px 20px 30px;
    margin-top: 20px;
`

export const Box2 = styled.div`
    z-index: 2;
    position: sticky;
    top: 0px;
    transform: skewY(-4deg);
    width: 100%;
    height: fit-content;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px 20px 20px 20px;
    background-color: #19181C;
`

export const Box3 = styled.div`
    transform: skewY(2deg);
    width: 400px;
    height: fit-content;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px 20px 20px 20px;
    background-color: #19181C;
`

export const Heading = styled.h1`
    transform: skewY(2deg);
    font-family: 'Megrim', cursive;
    width: 100%;
    font-size: 42px;
    font-weight: 600;
    color: #bfbfc7;
`

export const BreakH1 = styled.p`
    transform: skewY(-2deg);
    font-weight: 200;
    background-color: #19181C;
    color: #bfbfc7;
    width: 100%;
    text-align: center;
    font-size: 24px;
    font-style: italic;
`

export const BreakP = styled.p`
    font-weight: 200;
    color: #bfbfc7;
    width: 100%;
    text-align: left;
    margin-right: auto;
    font-size: 18px;
    transition: 0.3s;
    margin: 15px;
    
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`
