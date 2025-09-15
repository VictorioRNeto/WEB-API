//exporta a biblioteca express
const express = require("express");
//chama função express
const app = express();
app.get('/test', (request, response) =>{
     return response.send("Teste de nodemon")
})
//abrindo servidor express na porta 3333
app.listen(3333, () => {
  console.log("Serviço roando na porta 3333"); //verificação de funcionamento
});
