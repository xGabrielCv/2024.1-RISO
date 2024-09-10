import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  width: 60vw;
  height: 60vh;
  background: #fff;
  border-radius: 15px;
`;

export const BlueFrame = styled.div`
  padding: 30px 30px 30px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 28vw;
  height: 60vh;
  background-color: #58af9b;
  border-radius: 0px 15px 15px 0px;
`;

export const WhiteFrame = styled.div`
  padding: 10px 20px 10px 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 32vw;
  height: 60vh;
  border-radius: 15px 0px 0px 15px;
`;

export const TituloBlue = styled.h1`
  color: white;
  font-size: 35px;
  margin: 20px;
`;

export const TituloWhite = styled.h1`
  color: #58af9b;
  font-size: 35px;
`;

export const Texto = styled.p`
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 13px;
  color: white;
  margin: 20px;
`;

export const TextoBlack = styled.p`
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 13px;
  color: #58af9b;
  margin: 20px;
`;

export const Warning = styled.p`
    height: 10px;
    font-size: 12px;
    text-align: center;
    color: red;
    margin: 10px;
    margin-bottom: 18px;
`;

export const Espaco = styled.div`
    height: 38px;
`;

export const LinkTexto = styled.a`
  font-family: 'Merriweather Sans', sans-serif;
  text-decoration: underline;
  font-size: 13px;
  color: #58af9b;
  margin: 20px;
  cursor: pointer;
`;