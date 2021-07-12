import {Request, Response} from 'express';

// export é pra que possa ser usando em outros arquivos.
export const procurar = (req:Request, res:Response)=> {
    res.send('BUSCAR NO CONTROLLER');
    //res.render('pages/search');
};