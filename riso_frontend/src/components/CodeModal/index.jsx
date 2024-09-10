import React from "react";
import { Card, CloseContainer, Texto, Titulo } from "./styled";
import TextInput from "../TextInput";
import { FillButton } from "../Button/styled";
import PropsTypes from "prop-types";
import { IoIosClose } from "react-icons/io";

function CodeModal({
            onChangeCode,
            onClickButton,
            onClickClose
        }) {
  return (
    <Card>
      <CloseContainer>
        <IoIosClose onClick={onClickClose} style={{ height: 30, width: 30, margin: -10}}/>
      </CloseContainer>
      <Titulo>Entrar em Unidade</Titulo>
      <Texto>Digite o codigo da sua Unidade:</Texto>
      <TextInput placeholder="Codigo da Unidade" onChange={onChangeCode}/>
    
      <br />
      <FillButton onClick={onClickButton}>Salvar</FillButton>
    </Card>
  );
}

CodeModal.propsTypes = {
  onChangeCode: PropsTypes.func.isRequired,
  onClickButton: PropsTypes.func.isRequired,
  onClickClose: PropsTypes.func.isRequired
}

export default CodeModal;