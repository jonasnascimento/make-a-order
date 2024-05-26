# Sistema de Pedidos

Este é um sistema de pedidos construído com React para o front-end e Node.js para o back-end. A aplicação permite criar novos pedidos e visualizar a lista de pedidos existentes.

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

## Endpoints da API

- `GET /orders`: Retorna todos os pedidos.
- `POST /orders`: Cria um novo pedido.
- `DELETE /orders/:id`: Deleta um pedido existente.
  - Body (JSON):
    ```json
    {
      "order": "Nome do Pedido",
      "clientName": "Nome do Cliente"
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
