/*************************
** AQUI FICAM AS ROTAS  **
**************************/

import { Router } from 'express';
// o * é pq vai pegar tudo do arquivo 
import * as PageController from '../controllers/pageController'; 
import * as SearchController from '../controllers/searchController';
const router = Router();

//AQUI SETAMOS AS ROTAS
router.get('/', PageController.home);
router.get('/cachorros', PageController.cachorros);
router.get('/gatos', PageController.gatos);
router.get('/peixes', PageController.peixes);

router.get('/procurar', SearchController.procurar);

export default router;