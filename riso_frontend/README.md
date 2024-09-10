# RISO - Frontend - Serviço

Este documento fornece um guia passo a passo para configurar e executar o ambiente de desenvolvimento do frontend do projeto RISO, que utiliza React.js.

## Requisitos

Antes de começar, certifique-se de ter os seguintes softwares instalados:

- **Node.js (versão 20.x.x)**
- **NPM (versão compatível com Node.js 20)**
- **Git** (para controle de versão)

## Instalação

1. **Clone o repositório:**

```bash
git clone https://github.com/usuario/riso-frontend.git
cd riso-frontend
```

2. **Instale as dependências:**

Use o NPM para instalar todas as dependências do projeto:

```bash
npm install
```

## Configuração do Ambiente
### Variáveis do Sistema:

Crie um arquivo **.env** na raiz do projeto para configurar variáveis de ambiente. Por exemplo:

```env
REACT_APP_API_URL=http://localhost:3000
REACT_APP_ENV=development
```

## Executando o Servidor de Desenvolvimento
Para iniciar o servidor de desenvolvimento, use o seguinte comando:

```bash
npm start
```

Isso iniciará o servidor na porta 3000 por padrão. Acesse o aplicativo em http://localhost:3000.

O servidor será recarregado automaticamente a cada mudança no código.

## Compilando para Produção
Para compilar o projeto para produção, use:

```bash
npm run build
```

Isso criará uma pasta build com todos os arquivos otimizados para produção.

## Estrutura de Pastas
Aqui está a estrutura básica das pastas do frontend:

```plaintext
riso-frontend/
│
├── public/             # Arquivos públicos (index.html, favicon, etc.)
├── src/
│   ├── assets/         # Imagens, ícones, etc.
│   ├── components/     # Componentes reutilizáveis do React
│   ├── pages/          # Páginas do aplicativo
│   ├── services/       # Serviços de integração com API
│   └── App.js          # Componente principal do aplicativo
│
├── .gitignore          # Arquivos ignorados pelo Git
├── package.json        # Dependências e scripts do projeto
└── README.md           # Este manual
```

## Testes
Para executar os testes do frontend, utilize:

```bash
npm test
```

Os testes serão executados usando a ferramenta padrão do React (Jest).

## Contribuindo
Contribuições são bem-vindas! Consulte o [CONTRIBUTING.md](../CONTRIBUTING.md) para mais detalhes.

## Licença
Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](../LICENSE) para mais informações.



