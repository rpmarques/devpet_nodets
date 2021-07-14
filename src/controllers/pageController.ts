import { Request, Response } from 'express';
// ESSE criaMenuObjeto FICA DENTRO DE HELPERS, QUE SÃO FUNÇÕES AUXILIARES 
// QUE CRIAMOS PRA DEIXAR O CÓDIGO MAIS ORGANIZADO
import {criaMenuObjeto} from '../helpers/criaMenuObjeto';
//MODELS TEM AS FUNÇÕES QUE CONSULTAM OS DADOS
import {Pet} from '../models/pet';

// export é pra que possa ser usando em outros arquivos.
export const home = (req: Request, res: Response) => {
    //AQUI CARREGO TODOS OS DADOS NA VARIAVEL lista
    let lista = Pet.pegaTodos();

    res.render('pages/page',{
        menu: criaMenuObjeto('todos'),
        banner:{
            titulo:'Todos os animais',
            imagem_bg:'allanimals.jpg'
        },
        lista
    });
};

export const cachorros = (req: Request, res: Response) => {
    let lista = Pet.pegaPorTipo('dog');
    res.render('pages/page',{
        menu: criaMenuObjeto('cachorro'),
        banner:{
            titulo:'Todos os Cachorros',
            imagem_bg:'banner_dog.jpg'
        },
        lista
    });
};

export const gatos = (req: Request, res: Response) => {
    let lista = Pet.pegaPorTipo('cat');
    res.render('pages/page',{
        menu: criaMenuObjeto('gato'),
        banner:{
            titulo:'Todos os Gatos',
            imagem_bg:'banner_cat.jpg'
        },
        lista
    });
};

export const peixes = (req: Request, res: Response) => {
    let lista = Pet.pegaPorTipo('fish');
    res.render('pages/page',{
        menu: criaMenuObjeto('peixe'),
        banner:{
            titulo:'Todos os Peixes',
            imagem_bg:'banner_fish.jpg'
        },lista
    });
};