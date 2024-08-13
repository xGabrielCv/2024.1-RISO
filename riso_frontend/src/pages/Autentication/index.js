import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { createUser, findOne } from "../../services/userServices";

function Autentication() {

    //navigate
    const navigate = useNavigate();

    //Estados:
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

    async function upUser(event){
        event.preventDefault(); 
        try {
            const response = await createUser(name, email, password);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }

    async function loginUser(event){
        event.preventDefault();
        try {
            const response = await findOne(email, password);
            console.log(response);
            navigate('/homePage');
        } catch (err) {
            console.log(err);
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
                    
                        <a class="password" href="/">Esqueci minha senha?</a>
                        <button class="btn btn-second" onClick={loginUser}>Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Autentication;
