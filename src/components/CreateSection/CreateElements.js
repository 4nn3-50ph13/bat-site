import styled from 'styled-components';

export const CreateContainer = styled.div`
    margin-top: 150px;
    height: 900px;

    @media creen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const CreateH = styled.div`
padding-top: 7em;
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

export const CreateS = styled.div`
    font-weight: 200;
    color: #bfbfc7;
    width: 50%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    font-size: 28px;
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

export const Instructions1 = styled.div`
    position: absolute;
    width: ${window.innerHeight/4*3}px;
    text-align: center;
    font-size: 22px;
    margin-left: auto;
    margin-right: auto;
    font-weight: 600;
    color: #bfbfc7;
    border: none;
    background-color: rgb(0,0,0,0);
    top: ${window.innerHeight/2}px;
    left: ${window.innerWidth/2 - window.innerHeight/8*3}px;
`

export const Instructions2 = styled.div`
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
    width: 800px;
    height: 550px;
    background-color: rgb(0,0,0,0);
    border: 1px solid #d65a31;
    top: ${window.innerHeight/2 - 150}px;
    left: ${window.innerWidth/2 - 400}px;
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