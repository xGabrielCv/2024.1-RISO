import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, BlueFrame, WhiteFrame, TituloBlue, Texto, TituloWhite, TextoBlack, Warning, Espaco } from "./styled";
import OutlineButton from "../../components/OutlineButton";
import TextInput from "../../components/TextInput";
import FillButton from "../../components/Button";
import Cookies from 'js-cookie';

import { createUser } from "../../services/userServices";

function RegisterPage() {

  //navigate
  const navigate = useNavigate();

  //Estados:
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState(0);

  //Mudando o dado no input do email
  const handleChangeName = (event) => {
      setName(event.target.value);
  }

  //Mudando o dado no input do email
  const handleChangeEmail = (event) => {
      setEmail(event.target.value);
  }

  //Mudando o dado no input da Senha
  const handleChangePassword = (event) => {
      setPassword(event.target.value);
  }

  async function upUser(event) {
      event.preventDefault(); 
      try {
          const response = await createUser(name, email, password);
          setWarning(false);
          Cookies.set("token", response.data.token, { expires: 1 });
          navigate('/homePage');
      } catch (err) {
          // Verifica se err.response está definido
          if (err.response) {
              if (err.response.status === 400 && err.response.data.substatus === 1) {
                  setWarning(3);
                  setTimeout(() => {
                      setWarning(0);
                  }, 2000);
              } else if (err.response.status === 400 && err.response.data.substatus === 2) {
                  setWarning(4);
                  setTimeout(() => {
                      setWarning(0);
                  }, 2000);
              } else if (err.response.status === 400 && err.response.data.substatus === 3) {
                  setWarning(8);
                  setTimeout(() => {
                      setWarning(0);
                  }, 2000);
              } else if (err.response.status === 404 && !err.response.data.substatus) {
                  setWarning(7);
                  setTimeout(() => {
                      setWarning(0);
                  }, 2000);
              } else if (err.response.status === 500) {
                  setWarning(6);
                  setTimeout(() => {
                      setWarning(0);
                  }, 2000);
              } else {
                  console.log(err);
              }
          } else {
              console.error("Erro de conexão, banco inativo ou problema inesperado:", err.message);
              setWarning(5);
              setTimeout(() => {
                  setWarning(0);
              }, 2000);
          }
      }
  }

  function toLoginPage() {
    navigate('/Login');
  }

  return (
    <Container>
      <Box>
        <BlueFrame>
          <center>
            <TituloBlue>Seja bem Vindo ao RISO!</TituloBlue>
            <Texto>Para manter-se conectado conosco. Por favor, faça login com suas informações pessoais.</Texto>
            <OutlineButton onClick={toLoginPage}>Entrar</OutlineButton>
          </center>
        </BlueFrame>
        <WhiteFrame>
          <center>
            <TituloWhite>Criar Conta</TituloWhite>
            <TextoBlack>Use o seu email para registrar</TextoBlack>
            <TextInput placeholder="Nome" onChange={handleChangeName}/>
            <TextInput placeholder="Email" onChange={handleChangeEmail}/>
            <TextInput placeholder="Senha" onChange={handleChangePassword} type="password"/>
            <br />
            {warning === 3 ? (
                                <Warning>Preencha todos os campos!</Warning>
                            ) : warning === 4 ? (
                                <Warning>Este email já foi cadastrado!</Warning>
                            ) : warning === 5 ? (
                                <Warning>Serviço de dados inativo!</Warning>
                            ) : warning === 6 ? (
                                <Warning>Houve algum problema nosso!</Warning>
                            ) : warning === 7 ? (
                                <Warning>Serviço de dados inativo!</Warning>
                            ) :  warning === 8? (
                                <Warning>Email no formato Incorreto!</Warning>
                            ) : (
                                <Espaco />
                            )}
            <FillButton onClick={upUser}>Criar</FillButton>
          </center>
        </WhiteFrame>
      </Box>
    </Container>
  )
};

export default RegisterPage;