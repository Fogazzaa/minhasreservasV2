const mysql = require("mysql2");
require("dotenv").config(); // Adiciona esta linha para carregar as variáveis do .env

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST || "localhost", // Pega do .env ou usa localhost como fallback
  user: process.env.DB_USER || "alunods",   // Pega do .env ou usa o usuário alunods como fallback
  password: process.env.DB_PASSWORD || "senai@604", // Pega do .env ou usa a senha padrão
  database: process.env.DB_NAME || "rs",    // Pega do .env ou usa rs como fallback
  port: process.env.DB_PORT || 3306,        // Pega do .env ou usa a porta padrão
});

module.exports = pool;