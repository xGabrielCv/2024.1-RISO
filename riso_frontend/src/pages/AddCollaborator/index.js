import React, { useState, useEffect } from "react";
import "./styles.css";
import { linkUser } from "../../services/unityServices";

function addCollaborator() {

    //Estados:
    const [unityId, setUnityId] = useState('');
    const [email, setEmail] = useState('');
    
    //Mudando o dado no input do código de unidade
    const handleChangeUnityId = (event) => {
        setUnityId(event.target.value);
    }

    //Mudando o dado no input de email
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    
    async function addCollab(event){
        event.preventDefault(); 
        try {
            const response = await linkUser(unityId, email);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }

    // useEffect(() => {
    //     const btnSignin = document.querySelector("#signin");
    //     const btnSignup = document.querySelector("#signup");
    //     const body = document.querySelector("body");

    //     if (btnSignin && btnSignup) {
    //         btnSignin.addEventListener("click", function () {
    //             body.className = "sign-in-js";
    //         });

    //         btnSignup.addEventListener("click", function () {
    //             body.className = "sign-up-js";
    //         });
    //     }

    //     return () => {
    //         if (btnSignin && btnSignup) {
    //             btnSignin.removeEventListener("click", function () {
    //                 body.className = "sign-in-js";
    //             });

    //             btnSignup.removeEventListener("click", function () {
    //                 body.className = "sign-up-js";
    //             });
    //         }
    //     };
    // }, []);

    return (
        <div class="container">
            <div class="content first-content">
                <div /* class="second-column" */ >
                    <h2 class="title title-second">Associar-se a uma Unidade</h2>
                    <p class="description description-second">Torne-se colaborador de uma unidade</p>
                    <form class="form">                        
                        <label class="label-input" for="">
                            <i class="far fa-envelope icon-modify"></i>
                            <input type="email" placeholder="Email" value={email} onChange={handleChangeEmail}/>
                        </label>
                        
                        <label class="label-input" for="">
                            <i class="fas fa-lock icon-modify"></i>
                            <input type="password" placeholder="Código da unidade" value={password} onChange={handleChangeUnityId}/>
                        </label>
                        <button class="btn btn-second" onClick={addCollab}>Entrar</button>        
                    </form>
                </div>
            </div>
        </div>
    );
}

export default addCollaborator;
