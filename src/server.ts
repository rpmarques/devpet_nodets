import express from "express";
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config();

//INSTANCIA O SERVIDOR EXPRESS
const server = express();

//CONFIGURAR O TEMPLATE ENGINE
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

//CONFIGURAR PASTA PUBLICA
//tenho que voltar uma pasta pq esta dentro do src e o public fica no início do projeto
server.use(express.static(path.join(__dirname, '../public')));

//CONFIGURAR ROTAS
server.use(mainRoutes); //PEGA TUDO QUE TA LA NO routes/index.ts

server.use((req, res) => {
    res.render('pages/404');
});

//RODA O SERVIDOR
//env.PORT esta dentro do arquivo .env dentro de src
//server.listen('4000'); 
server.listen(process.env.PORT);