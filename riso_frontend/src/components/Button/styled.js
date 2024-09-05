import styled from 'styled-components';

export const FillButton = styled.button`
  padding: 10px 40px 10px 40px;
  background:  #58af9b;
  border-radius: 20px;
  font-family: 'Merriweather Sans', sans-serif;
  font-weight: bold;
  font-size: 12px;
  color: white;
  border: solid 2px #58af9b;
  transition: 200ms;

  &:hover {
    background: white;
    color: #58af9b;
    border: solid 2px #58af9b;
  }
`;
