require('dotenv').config(); // Carrega as variáveis do .env

const app = require("./index");
const cors = require("cors");

const corsOptions = {
    origin: process.env.CORS_ORIGIN, // Usa a variável de ambiente
    methods: process.env.CORS_METHODS, // Usa a variável de ambiente
    credentials: process.env.CORS_CREDENTIALS === 'true', // Converte para booleano
    optionsSucessStatus: parseInt(process.env.CORS_OPTIONS_SUCCESS_STATUS), // Converte para número
};

app.use(cors(corsOptions));

const port = process.env.PORT || 5000; // Usa a variável de ambiente para a porta, ou 5000 por padrão

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port} \n`);
});