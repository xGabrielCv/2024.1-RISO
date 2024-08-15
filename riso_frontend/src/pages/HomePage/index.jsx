import React from "react";


function HomePage() {

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
                    </label>
                    
                    <label class="label-input" for="">
                        <i class="far fa-envelope icon-modify"></i>
                    </label>
                    
                    <label class="label-input" for="">
                        <i class="fas fa-lock icon-modify"></i>
                    </label>
                 
                </form>
            </div>
        </div>
        <div class="content second-content">
            <div class="first-column">
                <h2 class="title title-primary">Olá, aaaaaaaa!</h2>
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
                    </label>
                
                    <label class="label-input" for="">
                        <i class="fas fa-lock icon-modify"></i>
                    </label>

                    <a class="password" href="/">Esqueci minha senha?</a>
              
                </form>
            </div>
        </div>
    </div>
  );
}

export default HomePage;