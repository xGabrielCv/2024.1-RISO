import styled from 'styled-components';

export const Input = styled.input`
  ${props => props.type === 'password' && `
    background: #eeeee4;
    margin: 12px;
    height: 5vh;
    width: 17vw;
    padding-left: 10px;
    border: 0px;
    border-radius: 5px;
    font-family: 'Merriweather Sans', sans-serif;
    font-size: 10px;
    `}
  
    background: #eeeee4;
    margin: 12px;
    height: 5vh;
    width: 17vw;
    padding-left: 10px;
    border: 0px;
    border-radius: 5px;
    font-family: 'Merriweather Sans', sans-serif;
    font-size: 10px;

`;
