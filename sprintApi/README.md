# SprintApi

Este é o back-end da aplicação Sprint, um sistema de reservas e navegação desenvolvido durante um sprint. Este projeto fornece a API responsável pelo processamento dos dados, integração com serviços externos e gerenciamento das operações do sistema.

## Descrição

A Sprint API foi desenvolvida utilizando Node.js e Express, oferecendo endpoints RESTful para serem consumidos pelo front-end. A API se integra a serviços externos para fornecer dados em tempo real sobre tempos de deslocamento, localização de veículos e outras informações relevantes. São implementadas práticas modernas de desenvolvimento, como uso de middlewares para validação, logging e tratamento de erros.

## Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript para o desenvolvimento do back-end.
- **Express** – Framework para construção de APIs e servidores HTTP.
- **Cors** – Middleware para habilitar requisições cross-origin.
- **Axios** – Para realizar requisições HTTP a APIs externas.

## Estrutura do Projeto

- **src/**: Código-fonte da aplicação, incluindo:
  - **routes/**: Definição das rotas da API.
  - **controllers/**: Lógica dos endpoints da API.
  - **middlewares/**: Funções middleware para autenticação, logging e tratamento de erros.
  - **config/**: Arquivos de configuração, como a conexão com o banco de dados e variáveis de ambiente.
- Arquivos de configuração:
  - `.env` – Arquivo para as variáveis de ambiente.
  - `.gitignore`
  - `package.json`

## Como Executar o Projeto

### Pré-requisitos

- [node.js](https://nodejs.org/) instalado.

### Passos para Instalação

1. **Clonar o Repositório**

   ```bash
    git clone https://github.com/Fogazzaa/minhasreservasV2/tree/main

   ```

2. **Entre na Pasta**

   ```bash
    cd sprintApi
   ```

3. **Instalar as Dependências**

- Se estiver usando npm, execute:

  ```bash
    npm i
  ```

4. **Iniciar o Servidor de Desenvolvimento**

- Com npm, execute:
  ```bash
    npm start
  ```

### Dependências Necessárias

1. **Express**

- Para construir a API:

  ```bash
    npm i express
  ```

2. **Cors**

- Para habilitar CORS e permitir requisições de outros domínios:

  ```bash
    npm i cors
  ```

3. **Axios**

- Para integrar com a API utilizando Axios, instale:

  ```bash
    npm i axios
  ```

# Configuração do (`server.js`)

## Configuração da conexão com `server.js`

O servidor utiliza variáveis de ambiente definidas no .env para configurar CORS e a porta. Para configurar a conexão, CRIE e defina as variáveis no arquivo .env:

```
PORT=5000                         # Porta do servidor
CORS_ORIGIN=*                     # Origem permitida (ex: http://localhost:3000)
CORS_METHODS=GET,HEAD,POST        # Métodos permitidos
CORS_CREDENTIALS=true             # Permitir cookies e headers
CORS_OPTIONS_SUCCESS_STATUS=204   # Status para respostas OPTIONS
```

# Configuração do Banco de Dados e Conexão MySQL

## Configuração da Conexão com MySQL

O projeto utiliza o pacote mysql2 para gerenciar a conexão com o banco de dados MySQL. Para configurar a conexão, CRIE e defina as variáveis no arquivo .env:

```
DB_HOST=localhost        # Endereço do banco de dados (ex: 127.0.0.1)
DB_USER=root             # Usuário do banco de dados (ex: root)
DB_PASSWORD=minha_senha  # Senha do banco de dados
DB_NAME=rs               # Nome do banco de dados
DB_PORT=3306             # Porta do MySQL
```

## Estrutura do Banco de Dados

Para criar o banco de dados e suas tabelas, execute os seguintes comandos no MySQL:

### Criar o Banco de Dados
```sql
CREATE DATABASE rs;
USE rs;
```

### Tabela `usuario`
```sql
CREATE TABLE usuario(
     id_usuario INT PRIMARY KEY AUTO_INCREMENT,
     nome VARCHAR(255) NOT NULL,
     email VARCHAR(255) UNIQUE NOT NULL,
     NIF CHAR(7) UNIQUE NOT NULL,
     senha VARCHAR(255) NOT NULL
);
```

### Tabela `sala`
```sql
CREATE TABLE sala(
     id_sala INT PRIMARY KEY AUTO_INCREMENT,
     nome VARCHAR(255) UNIQUE NOT NULL,
     descricao VARCHAR(255) NOT NULL,
     bloco VARCHAR(1) NOT NULL,
     tipo VARCHAR(255) NOT NULL,
     capacidade INT NOT NULL
);
```

### Tabela `reserva`
```sql
CREATE TABLE reserva(
     id_reserva INT PRIMARY KEY AUTO_INCREMENT,
     fk_id_sala INT NOT NULL,
     fk_id_usuario INT NOT NULL,
     dia_semana VARCHAR(20) NOT NULL,
     data DATE NOT NULL,
     hora_inicio TIME NOT NULL,
     hora_fim TIME NOT NULL,
     FOREIGN KEY (fk_id_sala) REFERENCES sala(id_sala),
     FOREIGN KEY (fk_id_usuario) REFERENCES usuario(id_usuario)
);
```

### Criação de Índices para Otimização
```sql
CREATE INDEX idx_reserva_dia_semana ON reserva(dia_semana);
CREATE INDEX idx_reserva_hora_inicio ON reserva(hora_inicio);
CREATE INDEX idx_reserva_hora_fim ON reserva(hora_fim);
```

## Notas Adicionais
- A conexão utiliza um pool para gerenciar até 10 conexões simultâneas.
- O `NIF` (documento de identificação) e o `email` dos usuários são únicos.
- A estrutura da tabela `reserva` garante integridade referencial por meio de `FOREIGN KEY` ligadas a `usuario` e `sala`.
- Índices foram adicionados para melhorar a eficiência das consultas.

## Executando os Comandos
1. Copie os comandos SQL acima e execute-os no seu banco de dados MySQL.
2. Certifique-se de que o servidor MySQL está rodando e acessível.
3. Verifique a conexão testando uma consulta simples após a execução.

## Documentação Completa dos Endpoints

Os exemplos de requisição cURL foram movidos para um arquivo separado. Acesse-os [aqui](https://github.com/Fogazzaa/minhasreservasV2/blob/main/sprintApi/CURLS.md).

## Autores

- [@fogazzaa](https://github.com/Fogazzaa)