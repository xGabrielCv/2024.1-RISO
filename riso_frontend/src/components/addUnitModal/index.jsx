import React from "react";
import { Card, CloseContainer, Texto, Titulo } from "./styled";
import TextInput from "../TextInput";
import { FillButton } from "../Button/styled";
import PropsTypes from "prop-types";
import { IoIosClose } from "react-icons/io";

function AddUnitModal({
            onChangeNome,
            onChangeFuncionarios, 
            onChangeCNPJ, 
            onChangeEstado, 
            onChangeRua, 
            onChangeComplemento,
            onChangeNumero,
            onClickButton,
            onClickClose
        }) {
  return (
    <Card>
      <CloseContainer>
        <IoIosClose onClick={onClickClose} style={{ height: 30, width: 30, margin: -10}}/>
      </CloseContainer>
      <Titulo>Crie uma Unidade</Titulo>
      <Texto>Digite o nome da sua nova Unidade:</Texto>
      <TextInput placeholder="Nome da Unidade" onChange={onChangeNome}/>
      <Texto>Digite o nome aproximado de funcionários:</Texto>
      <TextInput placeholder="Quantidade de Funcionários" onChange={onChangeFuncionarios}/>
      <Texto>Digite o CNPJ da Unidade:</Texto>
      <TextInput placeholder="CNPJ" onChange={onChangeCNPJ}/>

      <Texto>Digite os dados de endereço da Unidade:</Texto>
      <TextInput placeholder="Estado" onChange={onChangeEstado}/>
      <TextInput placeholder="Rua" onChange={onChangeRua}/>
      <TextInput placeholder="Complemento" onChange={onChangeComplemento}/>
      <TextInput placeholder="Número" onChange={onChangeNumero}/>

      <br />
      <FillButton onClick={onClickButton}>Salvar</FillButton>
    </Card>
  );
}

AddUnitModal.propsTypes = {
  OnChangeNome: PropsTypes.func.isRequired,
  onChangeFuncionarios: PropsTypes.func.isRequired,
  onChangeCNPJ: PropsTypes.func.isRequired,
  onChangeEstado: PropsTypes.func.isRequired,
  onChangeRua: PropsTypes.func.isRequired,
  onChangeComplemento: PropsTypes.func.isRequired,
  onChangeNumero: PropsTypes.func.isRequired,
  onClickButton: PropsTypes.func.isRequired,
  onClickClose: PropsTypes.func.isRequired
}

export default AddUnitModal;