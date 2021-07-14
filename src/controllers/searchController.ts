import { Request, Response } from 'express';
import { criaMenuObjeto } from '../helpers/criaMenuObjeto';
//MODELS TEM AS FUNÇÕES QUE CONSULTAM OS DADOS
import { Pet } from '../models/pet';

// export é pra que possa ser usando em outros arquivos.
export const procurar = (req: Request, res: Response) => {
    //res.send('BUSCAR NO CONTROLLER');
    //req pega
    //o 'q' vem do GET LA DO FORMULÁRIO
    let query: string = req.query.q as string;

    //SE NÃO DIGITEI NADA NA BUSCA E DAR UM ENTER
    if (!query){
        res.redirect('/');
        return;
    }

    let lista = Pet.pegaPorNome(query);
    //res manda
    res.render('pages/page', {
        menu: criaMenuObjeto(''),
        lista,
        query
    });
};