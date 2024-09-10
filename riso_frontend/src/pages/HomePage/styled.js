import styled from 'styled-components';

export const ConteinerPagina = styled.div`
  overflow-x: hidden; /* Bloqueia o scroll horizontal */
  overflow-y: hidden; /* Bloqueia o scroll horizontal */
  overflow-wrap: break-word; /* Quebra o conteúdo longo, evitando scroll */
  max-width: 100%; /* Impede que o conteúdo ultrapasse a largura da tela */
  max-height: 100%;
`;

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
  margin-top: 80px;
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
  width: 65vw;
  height: 35px;
`;

export const UnidadesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UnidadesRenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin-top: 20px;
  max-width: 100%;
`

export const CardRenderUnidades = styled.div`
  display: flex;
  padding: 40px;
  margin-bottom: 15px;
  border: solid 4px #58af9b;
  flex-direction: row;
  align-items: center;
  background: white;
  height: 100px;
  width: 95vw;
  color: #58af9b;
  border-radius: 20px;
  box-shadow: 2px 2px 20px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 300ms;

  &:hover{
    background: #58af9b;
    color: white;
  }
`;