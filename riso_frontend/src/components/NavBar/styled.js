import styled from 'styled-components';

export const Navegacao = styled.nav`
  max-width: 100vw;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #58af9b;
  align-items: center;
  padding: 20px;
`;

export const Titulo = styled.h1`
  color: white;
  font-size: 35px;
`;

export const Sair = styled.button`
  padding: 5px 15px 5px 15px;
  width: auto;
  height: 30px;
  background: white;
  color: #58af9b;
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 10px;
  font-weight: bold;
  border: solid 1px white;
  border-radius: 10px;
  transition: 200ms;

  &:hover {
    background: red;
    border: solid 1px red;
    color: white;
  }
`;
