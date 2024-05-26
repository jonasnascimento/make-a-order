# Sistema de Pedidos

Este é um sistema de pedidos simples construído com React para o front-end e Node.js para o back-end. A aplicação permite criar novos pedidos e visualizar a lista de pedidos existentes.

## Tecnologias Utilizadas

- React
- React Router DOM
- Styled Components
- Axios
- Node.js
- Express
- UUID
- Cors

## Estrutura do Projeto

- `src/`: Contém o código fonte do front-end.
  - `pages/`: Contém as páginas principais da aplicação.
    - `Home`: Página inicial onde os pedidos são criados.
    - `Orders`: Página de visualização dos pedidos.
  - `Assets/`: Contém imagens e outros ativos.
  - `styles/`: Contém os estilos globais.
  - `routes.js`: Define as rotas do front-end.
- `server/`: Contém o código fonte do back-end.
  - `index.js`: Arquivo principal do servidor.

## Instalação

### Pré-requisitos

- Node.js instalado
- npm ou yarn instalado

### Passos para rodar o projeto

1. Clone o repositório:

    ```sh
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    ```

2. Instale as dependências do front-end:

    ```sh
    cd src
    npm install
    ```

3. Instale as dependências do back-end:

    ```sh
    cd ../server
    npm install
    ```

4. Inicie o servidor:

    ```sh
    npm start
    ```

5. Inicie o front-end:

    Abra um novo terminal e execute:

    ```sh
    cd ../src
    npm start
    ```

O projeto estará disponível em `http://localhost:3000` e a API em `http://localhost:3002`.

## Endpoints da API

- `GET /orders`: Retorna todos os pedidos.
- `POST /orders`: Cria um novo pedido.
- `DELETE /orders/:id`: Deleta um pedido existente.
  - Body (JSON):
    ```json
    {
      "order": "Nome do Pedido",
      "clientName": "Nome do Cliente",
      "price": "Preço do Pedido"
    }
    ```

## Funcionalidades

### Página Inicial (Home)

- Permite criar um novo pedido preenchendo os campos de "Pedido" e "Nome do Cliente".
- Ao clicar em "Novo Pedido" ou pressionar a tecla Enter, o pedido é enviado para a API e a aplicação navega para a página de pedidos.

### Página de Pedidos (Orders)

- Exibe a lista de pedidos existentes.
- Permite voltar para a página inicial clicando no botão "Voltar".

## Autor

- [Jonas Soares](https://github.com/jonasnascimento)

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).