# Guia de Contribuição

Obrigado por considerar contribuir para o projeto RISO! Este documento fornece diretrizes para ajudar você a contribuir de maneira eficaz.

## Como Contribuir

### 1. Reporte um Bug

Se você encontrou um bug, abra uma [issue](https://github.com/mdsreq-fga-unb/2024.1-RISO-/issues) com uma descrição clara do problema. Inclua passos para reproduzir o bug, qual o comportamento esperado e o que realmente aconteceu. Capturas de tela e logs são bem-vindos.

### 2. Solicite um Novo Recurso

Para sugerir novas funcionalidades ou melhorias, abra uma [issue](https://github.com/mdsreq-fga-unb/2024.1-RISO-/issues) e descreva o recurso de maneira detalhada. Explique por que você acha que seria útil e como ele beneficiaria os usuários do projeto.

### 3. Faça um Pull Request

Se você deseja corrigir um bug, implementar um novo recurso ou melhorar o código, siga os passos abaixo:

#### Passo 1: Faça um Fork do Repositório

Crie um fork do repositório clicando no botão “Fork” na página principal do projeto.

#### Passo 2: Clone o Repositório Forked

Clone o repositório forked para sua máquina local:

```bash
git clone https://github.com/mdsreq-fga-unb/2024.1-RISO-.git

cd 2024.1-RISO-
```

#### Passo 3: Crie uma Branch
Crie uma nova branch para suas alterações:

```bash
git checkout -b feat/minha-feature
```

Nomeie sua branch de forma descritiva, como correcao-bug-nome ou feature-novo-recurso.

#### Passo 4: Faça suas Alterações
Implemente suas alterações de forma clara e concisa. Garanta que o código siga as convenções estabelecidas no projeto. Se possível, adicione testes que validem suas mudanças.

#### Passo 5: Execute os Testes
Antes de enviar o código, certifique-se de que todos os testes estão passando:

```bash
npm test
```

#### Passo 6: Commit suas Alterações
Faça commits das suas alterações com uma mensagem clara e descritiva:

```bash
git add .

git commit -m "Adiciona funcionalidade X para melhorar Y"
```

#### Passo 7: Envie as Alterações
Envie suas alterações para o repositório remoto:

```bash
git push origin minha-feature
```

#### Passo 8: Abra um Pull Request
Vá até o repositório original no GitHub e clique em “Compare & pull request”. Descreva suas mudanças no Pull Request e relacione-o com a issue correspondente, se aplicável.

### Revisão de Pull Requests
As contribuições serão revisadas pela equipe de mantenedores do projeto. O feedback será dado diretamente no Pull Request. Certifique-se de responder às solicitações de mudança e ajustar o código conforme necessário.

### Políticas de Configuração do Software
Ao contribuir com este projeto, pedimos que você siga nossa [política de configuração do software](https://mdsreq-fga-unb.github.io/2024.1-RISO-/sections/politicas/GCS/GCS/).

## Agradecimentos
Agradecemos sua contribuição e empenho em melhorar o projeto RISO!