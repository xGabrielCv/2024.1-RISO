import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, BlueFrame, WhiteFrame, TituloBlue, Texto, TituloWhite, TextoBlack, Warning, Espaco, LinkTexto } from "./styled";
import OutlineButton from "../../components/OutlineButton";
import TextInput from "../../components/TextInput";
import FillButton from "../../components/Button";

import { loginUser } from "../../services/userServices";

function LoginPage() {

  //navigate
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState(0);

  //Mudando o dado no input do email
  const handleChangeEmail = (event) => {
      setEmail(event.target.value);
  }

  //Mudando o dado no input da Senha
  const handleChangePassword = (event) => {
      setPassword(event.target.value);
  }

  async function login(event) {
    event.preventDefault();
    try {
        await loginUser(email, password);
        setWarning(false);
        navigate('/homePage');
    } catch (err) {
        if (err.response) {
            if (err.response.status === 400) {
                setWarning(1);
                setTimeout(() => {
                    setWarning(0);
                }, 2000);
            } else if (err.response.status === 404 && err.response.data.substatus === 1) {
                setWarning(2);
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

  function toRegisterPage() {
    navigate('/');
  }

  return (
    <Container>
      <Box>
        <WhiteFrame>
          <center>
            <TituloWhite>Entrar</TituloWhite>
            <TextoBlack>Preencha com o email e senha para entrar</TextoBlack>

            <TextInput placeholder={'Email'} onChange={handleChangeEmail}/>
            <TextInput placeholder={'Senha'} onChange={handleChangePassword}/>

            <br />

            {warning === 1 ? (
                                <Warning>Senha ou Email incorretos!</Warning>
                            ) : warning === 2 ? (
                                <Warning>Conta não Registrada!</Warning>
                            ) : warning === 6 ? (
                                <Warning>Houve algum problema nosso!</Warning>
                            ) : warning === 5 ? (
                                <Warning>Serviço de dados inativo!</Warning>
                            ) : warning === 7 ? (
                                <Warning>Serviço de dados inativo!</Warning>
                            ) : (
                                <Espaco />
                            )}

            <LinkTexto>Esqueci Minha Senha?</LinkTexto>

            <br />
            <br />

            <FillButton text={'Entrar'} onClick={login}/>
          </center>
        </WhiteFrame>
        <BlueFrame>
          <center>
            <TituloBlue>
              Olá, não possui conta?
            </TituloBlue>

            <Texto>Insira suas informações pessoais e comece sua jornada conosco.</Texto>
            <OutlineButton text={'Criar'} onClick={toRegisterPage}/>
          </center>
        </BlueFrame>
      </Box>
    </Container>
  )
};

export default LoginPage;