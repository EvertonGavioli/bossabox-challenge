# VUTTR API - Very Useful Tools to Remember

## Descrição

API para a aplicação VUTTR. A aplicação é um simples repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags.
Foi desenvolvida utilizando (Node + Express + Mongoose + MongoDB) e documentada utilizando o Swagger;

## Utilização

A seguinte api está hospedada e dísponível para acesso e utilização em [`vuttr-api`](https://vuttr-app.herokuapp.com/api)

## Rotas e Documentação

As rotas e documentação está dísponível para acesso em [`vuttr-api-docs`](https://vuttr-app.herokuapp.com/api/api-docs)

## Instalação (Developers)

Recomenda-se utilizar o gerenciador de pacotes [`yarn`](https://yarnpkg.com), para instalar as dependência de desenvolvimento do projeto.

### Quick Start

Para executar o projeto localmente, deve-se clonar o repositório no gitHub.

```sh
git clone https://github.com/EvertonGavioli/bossabox-challenge-backend.git
cd bossabox-challenge-backend
yarn install
yarn dev
```

A api agora está disponível para acesso na url <http://localhost:3000/api>

### Exemplo de Resposta

<https://vuttr-app.herokuapp.com/api/tools>

```json
[
  {
    "id": "5d992bfabd13e920e8c7089f",
    "title": "Notion",
    "link": "https://notion.so",
    "description": "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
    "tags": ["organization", "planning", "collaboration", "writing", "calendar"]
  }
]
```
