# MinhasReservasV2

Este é o back-end da aplicação MinhasReservasV2, um sistema de reservas desenvolvido para facilitar o agendamento de salas e recursos. Este projeto fornece a API responsável pelo processamento dos dados, integração com serviços externos e gerenciamento das operações do sistema.

## Descrição

A MinhasReservasV2 API foi desenvolvida utilizando Node.js e Express, oferecendo endpoints RESTful para serem consumidos pelo front-end. A API se integra a serviços externos para fornecer dados em tempo real sobre disponibilidade de salas e outras informações relevantes. São implementadas práticas modernas de desenvolvimento, como uso de middlewares para validação, logging e tratamento de erros.

## Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript para o desenvolvimento do back-end.
- **Express** – Framework para construção de APIs e servidores HTTP.
- **Cors** – Middleware para habilitar requisições cross-origin.
- **Axios** – Para realizar requisições HTTP a APIs externas.
- **MySQL** – Sistema de gerenciamento de banco de dados relacional.

## Estrutura do Projeto

- **src/**: Código-fonte da aplicação, incluindo:
  - **routes/**: Definição das rotas da API.
  - **controllers/**: Lógica dos endpoints da API.
  - **middlewares/**: Funções middleware para autenticação, logging e tratamento de erros.
  - **config/**: Arquivos de configuração, como a conexão com o banco de dados e variáveis de ambiente.
  - **db/**: Scripts e configurações relacionados ao banco de dados.
- Arquivos de configuração:
  - `.gitignore`
  - `package.json`

## Como Executar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado.
- [MySQL](https://www.mysql.com/) instalado e configurado.

### Passos para Instalação

1. **Clonar o Repositório**

   ```bash
    git clone https://github.com/Fogazzaa/minhasreservasV2/tree/main

   ```

## Documentação Completa dos Requisitos Necessários

Os requisitos necessários para funcionamento pleno do projeto estão em outro repositório. Acesse-os [aqui](https://github.com/Fogazzaa/minhasreservasV2/tree/main/sprintApi).

## Documentação Completa dos Endpoints

Os exemplos de requisição cURL foram movidos para um arquivo separado. Acesse-os [aqui](https://github.com/Fogazzaa/minhasreservasV2/blob/main/sprintApi/CURLS.md).

## Autores

- [@fogazzaa](https://github.com/Fogazzaa)