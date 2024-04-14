// pegando a pasta do express do node_modules e despejando na variavel express
const express = require("express");

// inicializando o express para ser utilizado
const app = express();

// crio uma porta que o express vai ficar observando como se fosse um porteiro
const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));