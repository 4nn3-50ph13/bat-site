import styled from 'styled-components';


export const ExploreContainer = styled.div`
    margin-top: 150px;
    height: 800px;

    @media creen and (max-width: 768px) {
        padding: 100px 0;
    }
`
export const ExploreWrapper = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin-top: auto;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const ExploreRow = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-area: ${({imgStart}) => imgStart ? `'col1' 'col2'`  : `'col1 col1' 'col2 col2'`}
    }
`

export const Heading = styled.h1`
    padding-top: 4em;
    width: 50%;
    text-align: center;
    font-size: 32px;
    margin-left: auto;
    margin-right: auto;
    font-weight: 600;
    color: #bfbfc7;

    @media screen and (max-width: 480px) {
        font-size: 12px;
    }
`

export const Subtitle = styled.p`
    font-weight: 200;
    color: #bfbfc7;
    width: 50%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    font-size: 28px;
`

export const ModalContent = styled.div`
    margin: 10px;
`

export const Box1 = styled.div`
    z-index: 4;
    transform: skewY(2deg);
    background-color: #d65a31;
    width: fit-content;
    height: fit-content;
    padding: 20px;
    margin-top: 20px;
`

export const Box2 = styled.div`
    z-index: 2;
    position: sticky;
    top: 0px;
    transform: skewY(-4deg);
    width: 100%;
    height: fit-content;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 15px;
    background-color: #19181C;
`

export const Box3 = styled.div`
    transform: skewY(2deg);
    width: 100%;
    height: fit-content;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px 20px 20px 20px;
    background-color: #19181C;
`

export const ModalH1 = styled.div`
text-align: center;
    color: #bfbfc7;
    margin: 10px;
    font-size: 40px;
    text-transform: uppercase;
    font-weight: 600;
`

export const ModalH3 = styled.div`
    transform: skewY(2deg);
    color: #bfbfc7;
    font-size: 26px;
    text-align: left;
    font-weight: 600;
`

export const ModalH4 = styled.div`
    transform: skewY(-4deg);
    color: #bfbfc7;
    margin: 2px;
    font-size: 18px;
    text-align: left;
    font-weight: 600;
`

export const ModalP = styled.div`
transform: skewY(-4deg);
    color: #bfbfc7; 
    margin: 3px;
    text-align: left;
`

export const HelpBtn = styled.button`
    position: absolute;
    width: 30px;
    height: 30px;
    background: #bfbfc7;
    border-radius: 25px;
    padding: 2px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    top: 20px;
    right: 50px;
`

export const HelpContent = styled.button`
    position: relative;
    display: flex;
    flex-direction: column;
`

export const Instructions1 = styled.button`
    position: absolute;
    width: ${window.innerHeight/4*3}px;
    text-align: center;
    font-size: 24px;
    margin-left: auto;
    margin-right: auto;
    font-weight: 600;
    color: #bfbfc7;
    border: none;
    background-color: rgb(0,0,0,0);
    top: ${window.innerHeight/2 - 150}px;
    left: ${window.innerWidth/2 - window.innerHeight/8*3}px;
`

export const Instructions2 = styled.button`
    position: absolute;
    width: ${window.innerHeight/4*3}px;
    text-align: center;
    font-size: 24px;
    margin-left: auto;
    margin-right: auto;
    font-weight: 600;
    color: #bfbfc7;
    border: none;
    background-color: rgb(0,0,0,0);
    top: ${window.innerHeight/2 + 200}px;
    left: ${window.innerWidth/2 - window.innerHeight/8*3}px;
`

export const CanvasOutline = styled.div`
    position: absolute;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 100px;
    color: #bfbfc7;
    width: ${window.innerWidth*0.9}px;
    height: ${window.innerHeight*0.85}px;
    background-color: rgb(0,0,0,0.5);
    box-shadow: 0px 0px 20px rgb(0,0,0);
    border: none;
    top: ${(window.innerHeight - window.innerHeight*0.8)/2}px;
    left: ${(window.innerWidth - window.innerWidth*0.9)/2}px;
`