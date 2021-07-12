import {Request, Response} from 'express';

// export é pra que possa ser usando em outros arquivos.
export const home = (req:Request, res:Response)=> {
    res.send('HOME NO CONTROLLER');
    //res.render('pages/page');
};

export const cachorros = (req:Request, res:Response)=> {
    res.send('CACHORROS NO CONTROLLER');
    //res.render('pages/page');
};

export const gatos = (req:Request, res:Response)=> {
    res.send('GATOS NO CONTROLLER');
    //res.render('pages/page');
};

export const peixes = (req:Request, res:Response)=> {
    res.send('PEIXES NO CONTROLLER');
    //res.render('pages/page');
};