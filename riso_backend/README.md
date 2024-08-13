# RISO - Backend - Serviço

Este documento serve como um guia para configurar e executar o ambiente de desenvolvimento do serviço backend do projeto RISO.

## Requisitos

Antes de começar, certifique-se de ter os seguintes softwares instalados em sua máquina:

- **Node.js (versão 20.x.x)**
- **NPM (versão compatível com Node.js 20)**
- **Git** (para controle de versão)
- **MongoDB** (caso utilize um banco de dados local)

## Instalação

1. **Clone o repositório:**

```bash
git clone https://github.com/usuario/riso-backend.git

cd riso-backend
```

## Instale as dependências

Utilize o NPM para instalar todas as dependências necessárias do projeto:

```bash
npm install
```

# Configuração do Ambiente

## Variáveis de Ambiente

Certifique-se de criar um arquivo **.env** na raiz do projeto com as seguintes variáveis de ambiente:

```env
MONGODB_URL= (Link do Banco de dados)
SOFTWARE_HOST= (Link do domínio do site)
DB_NAME= (Nome do Banco)
```

## Conexão com o Banco de Dados
O projeto RISO utiliza o MongoDB como banco de dados. Para configurar a conexão:

### Local:

Se estiver utilizando um banco de dados local, certifique-se de que o MongoDB está rodando na máquina e que as variáveis **MONGODB_URL***, **SOFTWARE_HOST**, **DB_NAME**, estão devidamente configuradas no arquivo **.env**.

### Atlas (nuvem):

Caso utilize o MongoDB Atlas, substitua os valores das variáveis de ambiente com os dados fornecidos pelo Atlas.

# Executando o Servidor
## Ambiente de Desenvolvimento:

Para iniciar o servidor em ambiente de desenvolvimento, utilize o comando:

```bash
npm run dev
```

Este comando usará o **nodemon** para monitorar as mudanças no código e reiniciar o servidor automaticamente.

## Ambiente de Produção:

Para executar o servidor em ambiente de produção, utilize:

```bash
npm start
```

# Estrutura de Pastas
Abaixo está a estrutura básica das pastas do projeto:

```plaintext
riso-backend/
│
├── src/
│   ├── controllers/    # Lógica de controle das rotas
│   ├── database/       # Configuração com o banco online MongoDB Atlas
│   ├── models/         # Definição dos modelos (Schemas do Mongoose)
│   ├── routes/         # Definição das rotas da API
│   ├── middlewares/    # Middlewares customizados
│   ├── services/       # Definição dos serviços de manipulação das rotas
│   └── index.js        # Ponto de entrada do servidor
│
├── .env                # Variáveis de ambiente
├── .env.template       # Modelo para ser copiado e transformado em .env
├── .gitignore          # Arquivos ignorados pelo Git
├── package-lock.json   # Dependências e scripts do projeto
├── package.json        # Dependências e scripts do projeto
└── README.md           # Este manual
```

# Testes
Para executar os testes automatizados, utilize o comando:

```bash
npm test
```

# Contribuindo
Contribuições são bem-vindas! Siga as diretrizes de contribuição descritas no [CONTRIBUTING.md](../CONTRIBUTING.md)

# Licença
Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](../LICENSE) para mais detalhes.


