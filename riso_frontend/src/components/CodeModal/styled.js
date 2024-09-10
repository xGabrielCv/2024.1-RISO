import styled from 'styled-components';

export const Card = styled.div`
  padding: 20px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: auto;
  width:  55vh;
  background: white;
  border-radius: 10px;
`;

export const CloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  width: 100%;
  height: auto;
`;

export const Titulo = styled.h1`
  color: #58af9b;
  font-size: 27px;
  margin-bottom: 15px;
`;

export const Texto = styled.label`
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 10px;
`;
