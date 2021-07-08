import express from "express";
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';

dotenv.config();

//INSTANCIA O SERVIDOR EXPRESS
const server = express();

//CONFIGURAR O TEMPLATE ENGINE
server.set('view engine','mustache');
server.set('view',path.join(__dirname,'views'));
server.engine('mustache',mustache());

//CONFIGURAR PASTA PUBLICA
//tenho que voltar uma pasta pq esta dentro do src e o public fica no início do projeto
server.use(express.static(path.join(__dirname,'../public'))); 

//CONFIGURAR ROTAS

//RODA O SERVIDOR
//env.PORT esta dentro do arquivo .env dentro de src
server.listen(process.env.PORT); 