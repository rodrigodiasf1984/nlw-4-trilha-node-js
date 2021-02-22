import express from 'express';

const app = express();

app.get("/", (request, response)=>{
  return response.json({message:"Hello World - NLW-04"});
});

app.post("/", (request, response)=>{
  return response.json({message: "Dados salvos com sucesso!"});
});

app.listen(3333, ()=> console.log("Server is running"));

