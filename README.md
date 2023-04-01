# Chat em tempo real com Socket.io

Este projeto é um chat em tempo real utilizando socket.io e Node.js. O objetivo é permitir que usuários possam se comunicar em uma sala de chat de forma instantânea.

## Frontend

O frontend pronto para consumir esta API está neste repositório: https://github.com/brunodefreitasborges/socket-angular-chat-client

## Pré-requisitos
Para rodar o projeto localmente, você precisará ter o Node.js instalado na sua máquina, assim como uma conta no MongoDB Atlas para obter uma URL do MongoDB.

## Instalação
1. Faça o download ou clone o repositório na sua máquina local
2. Na pasta do projeto, crie um arquivo .env com as seguintes variáveis de ambiente:
```
MONGO_URI=<sua url do mongo>
PORT=3000
TOKEN_SECRET=<seu secret - qualquer string>
ORIGIN="http://localhost:4200"
```
3. Abra um terminal na pasta do projeto e instale as dependências do projeto:
```
npm install
```
4. Inicie o servidor:
```
npm start
```
5. O servidor estará rodando na porta definida na variável de ambiente PORT.

## Uso
O servidor disponibiliza as seguintes rotas:

- POST /api/auth/register: Registra um novo usuário na aplicação. Requer um corpo da requisição com os seguintes campos: name, email e password.

- POST /api/auth/login: Realiza o login de um usuário existente. Requer um corpo da requisição com os seguintes campos: email e password.

## Tecnologias utilizadas
- Node.js
- Socket.io
- Express
- MongoDB
