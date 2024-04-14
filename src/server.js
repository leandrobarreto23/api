// pegando a pasta do express do node_modules e despejando na variavel express
const express = require("express");

// inicializando o express para ser utilizado
const app = express();

//criacao de rota com método GET
//para criar um parametro voce precisa inserir na rota ":/nomedoparamerto"
app.get("/message/:id/:user", (request, response) => {
  //desestruturar o request.params
  const { id, user } = request.params

  response.send(`
    Id da mensagem: ${id}.
    Para o usuário: ${user}
  `)
})

// crio uma porta que o express vai ficar observando como se fosse um porteiro
const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));