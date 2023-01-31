import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 1000px;
    position: relative;
    z-index: 1;
`

export const HomeBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const HomeContent = styled.div`
    z-index: 3; 
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`


export const HomeP = styled.p`
    margin-top: 24px;
    color: #19181C;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }
    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

