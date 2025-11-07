# 🧠 DIO Clone - Backend (Estudo com Nest.js)

Este é o **backend do projeto DIO Clone**, desenvolvido com o objetivo de **aprimorar conhecimentos em Node.js, TypeScript e Nest.js**.  
O sistema simula parte das funcionalidades da plataforma [Digital Innovation One (DIO)](https://www.dio.me/), incluindo **cadastro de usuários**, **autenticação** e um sistema de **feedback** entre os participantes.

---

## 🚀 Objetivo do Projeto

Este projeto tem fins **educacionais**, servindo para praticar:

- Estruturação de um backend com **Nest.js**
- Uso de **variáveis de ambiente** com `@nestjs/config`
- Criação e relacionamento de entidades com **TypeORM**
- Implementação de **autenticação JWT**
- Construção de um sistema de **feedback entre usuários**
- Upload e armazenamento de **imagens de projetos**

---

## 🧩 Tecnologias Utilizadas

| Tecnologia | Descrição |
|-------------|------------|
| **Nest.js** | Framework para construção de APIs em Node.js com TypeScript |
| **TypeScript** | Superset do JavaScript com tipagem estática |
| **TypeORM** | ORM utilizado para mapear entidades e gerenciar o banco de dados |
| **MySQL** | Banco de dados relacional utilizado no projeto |
| **@nestjs/config** | Gerenciamento de variáveis de ambiente |
| **bcrypt** | Criptografia de senhas dos usuários |
| **JWT (Json Web Token)** | Autenticação e autorização |
| **Multer** *(em breve)* | Upload de imagens dos projetos dos usuários |

---

## 🧱 Estrutura das Entidades

### 🧍‍♂️ **Usuário (`User`)**
Representa o participante cadastrado na plataforma.

| Campo | Tipo | Descrição |
|--------|------|------------|
| `id` | number | Identificador único |
| `nome` | string | Nome do usuário |
| `email` | string | Email utilizado para login |
| `senha` | string | Senha criptografada |
| `imagemProjeto` | string (opcional) | Caminho da imagem do projeto |
| `feedbacksRecebidos` | Feedback[] | Feedbacks que o usuário recebeu |

---

### 💬 **Feedback (`Feedback`)**
Representa uma avaliação ou comentário deixado por outro usuário sobre um projeto.

| Campo | Tipo | Descrição |
|--------|------|------------|
| `id` | number | Identificador único |
| `mensagem` | string | Texto do feedback |
| `autor` | User | Usuário que enviou o feedback |
| `destinatario` | User | Usuário que recebeu o feedback |

---

## 🔗 Relacionamentos entre Entidades

- Um **usuário** pode receber **vários feedbacks**  
  → Relacionamento **1:N (User → Feedback)**
- Um **feedback** pertence a **um usuário autor** e a **um usuário destinatário**  
  → Relacionamento **N:1 (Feedback → User)**

---

## 🧩 Diagrama UML

![Diagrama UML](https://freeimage.host/i/KDX2CZb)

## ⚙️ Funcionalidades (em desenvolvimento)

 ### Cadastro de usuário

 ### Login com autenticação JWT

 ### Upload de imagem do projeto

 ### Envio de feedback para outros usuários

 ### Listagem de feedbacks recebidos

 ### Atualização e exclusão de conta

## 💻 Como Rodar o Projeto Localmente
Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/dio-clone-api.git
Entre na pasta:

bash
Copiar código
cd dio-clone-api
Instale as dependências:

bash
Copiar código
npm install
Crie um arquivo .env na raiz:

env
Copiar código
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=1234
DB_NAME=dio_clone
JWT_SECRET=meuSegredoSuperSeguro
Rode o servidor:

bash
Copiar código
npm run start:dev
Acesse a API:

arduino
Copiar código
http://localhost:3000
## 🧠 Autor
Wellerson Pinheiros
💻 Desenvolvedor Back-end em formação
📍 Osasco - SP
📘 Estudando: Nest.js, TypeORM, React, e muito mais 🚀

Projeto desenvolvido com fins educacionais, inspirado na plataforma DIO.
Este repositório faz parte do aprendizado em Nest.js e desenvolvimento de APIs RESTful.