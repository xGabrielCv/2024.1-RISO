import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { createUser, loginUser } from "../../services/userServices";

function Autentication() {

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
    

    useEffect(() => {
        const btnSignin = document.querySelector("#signin");
        const btnSignup = document.querySelector("#signup");
        const body = document.querySelector("body");

        if (btnSignin && btnSignup) {
            btnSignin.addEventListener("click", function () {
                body.className = "sign-in-js";
            });

            btnSignup.addEventListener("click", function () {
                body.className = "sign-up-js";
            });
        }

        return () => {
            if (btnSignin && btnSignup) {
                btnSignin.removeEventListener("click", function () {
                    body.className = "sign-in-js";
                });

                btnSignup.removeEventListener("click", function () {
                    body.className = "sign-up-js";
                });
            }
        };
    }, []);

    return (
        <div class="AutenticationPage">
            <div class="container">
                <div class="content first-content">
                    <div class="first-column">
                        <h2 class="title title-primary">Bem vindo!</h2>
                        <p class="description description-primary">Para manter-se conectado conosco.</p>
                        <p class="description description-primary">Por favor, faça login com suas informações pessoais.</p>
                        <button id="signin" class="btn btn-primary">Entrar</button>
                    </div>
                    <div class="second-column">
                        <h2 class="title title-second">Criar conta</h2>
                        <p class="description description-second">ou use o seu email para registro</p>
                        <form class="form">
                            <label class="label-input" for="">
                                <i class="far fa-user icon-modify"></i>
                                <input type="text" placeholder="Nome" value={name} onChange={handleChangeName}/>
                            </label>
                            
                            <label class="label-input" for="">
                                <i class="far fa-envelope icon-modify"></i>
                                <input type="email" placeholder="Email" value={email} onChange={handleChangeEmail}/>
                            </label>
                            
                            <label class="label-input" for="">
                                <i class="fas fa-lock icon-modify"></i>
                                <input type="password" placeholder="Senha" value={password} onChange={handleChangePassword}/>
                            </label>
                            {warning === 3 ? (
                                <p class="warning">Preencha todos os campos!</p>
                            ) : warning === 4 ? (
                                <p class="warning">Este email já foi cadastrado!</p>
                            ) : warning === 5 ? (
                                <p class="warning">Serviço de dados inativo!</p>
                            ) : warning === 6 ? (
                                <p class="warning">Houve algum problema nosso!</p>
                            ) : warning === 7 ? (
                                <p class="warning">Serviço de dados inativo!</p>
                            ) :  warning === 8? (
                                <p class="warning">Email no formato Incorreto!</p>
                            ) : (
                                <div style={{height: 10}}></div>
                            )}
                            
                            <button class="btn btn-second" onClick={upUser}>Criar</button>        
                        </form>
                    </div>
                </div>
                <div class="content second-content">
                    <div class="first-column">
                        <h2 class="title title-primary">Olá, amigo!</h2>
                        <p class="description description-primary">Insira suas informações pessoais.</p>
                        <p class="description description-primary">e comece sua jornada conosco.</p>
                        <button id="signup" class="btn btn-primary">Criar</button>
                    </div>
                    <div class="second-column">
                        <h2 class="title title-second">Entrar</h2>
                        <p class="description description-second">ou use sua conta de email</p>
                        <form class="form">
                        
                            <label class="label-input" for="">
                                <i class="far fa-envelope icon-modify"></i>
                                <input type="email" placeholder="Email" onChange={handleChangeEmail}/>
                            </label>
                        
                            <label class="label-input" for="">
                                <i class="fas fa-lock icon-modify"></i>
                                <input type="password" placeholder="Senha" onChange={handleChangePassword}/>
                            </label>
                            {warning === 1 ? (
                                <p class="warning">Senha ou Email incorretos!</p>
                            ) : warning === 2 ? (
                                <p class="warning">Conta não Registrada!</p>
                            ) : warning === 6 ? (
                                <p class="warning">Houve algum problema nosso!</p>
                            ) : warning === 5 ? (
                                <p class="warning">Serviço de dados inativo!</p>
                            ) : warning === 7 ? (
                                <p class="warning">Serviço de dados inativo!</p>
                            ) : (
                                <div style={{height: 10}}></div>
                            )}

                            <a class="password" href="/RegisterUnit">Esqueci minha senha?</a>
                            <button class="btn btn-second" onClick={login}>Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Autentication;
