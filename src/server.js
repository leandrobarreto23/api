// pegando a pasta do express do node_modules e despejando na variavel express
const express = require("express");

// inicializando o express para ser utilizado
const app = express();
app.use(express.json())

//criacao de rota com método GET usando Query Params
///users?page=5&limit=10
app.post("/users", (request, response) => {
  const {name, email, password} = request.body

  //devolvendo a resposta como json
  response.json({name, email, password});
  // response.send(`Usuário: ${name}. Email: ${email} e a senha é: ${password}`);
});

// crio uma porta que o express vai ficar observando como se fosse um porteiro
const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));