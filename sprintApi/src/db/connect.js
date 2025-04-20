const mysql = require("mysql2");
require("dotenv").config(); // Adiciona esta linha para carregar as variáveis do .env

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST, // Pega do .env ou usa localhost como fallback
  user: process.env.DB_USER,   // Pega do .env ou usa o usuário alunods como fallback
  password: process.env.DB_PASSWORD, // Pega do .env ou usa a senha padrão
  database: process.env.DB_NAME,    // Pega do .env ou usa rs como fallback
  port: process.env.DB_PORT,        // Pega do .env ou usa a porta padrão
});

module.exports = pool;