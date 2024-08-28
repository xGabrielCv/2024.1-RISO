import styled from 'styled-components';

export const Modal = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5); /* Fundo semitransparente */
  width: 100vw;
  height: 100vh;
`;

export const ManipulacaoContainer = styled.div`
  width: 100vw;
  height: 90px;
  align-items: center;
  padding: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Pesquisa = styled.input`
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 12px;
  padding: 10px;
  background: white;
  border: solid 1px #58af9b;
  border-radius: 15px;
  width: 80vw;
  height: 35px;
`;

export const UnidadesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

