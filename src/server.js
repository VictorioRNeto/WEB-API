//importa biblioteca
//const app = require("./app");
import app from "./app";
//abrindo servidor express na porta 3333
app.listen(3333, () => {
  console.log("Serviço roando na porta 3333"); //verificação de funcionamento
});
