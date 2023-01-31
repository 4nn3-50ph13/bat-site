import styled from 'styled-components';

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

export const LangSection = styled.button`
background-color: rgb(0,0,0,0);
display: flex;
align-items: right;
width: 100%;
height: 80px;
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