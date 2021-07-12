import { Router } from 'express';

const router = Router();

//AQUI SETAMOS AS ROTAS
router.get('/', (req, res) => {
    res.send('Oooo começo do início de tudo');
});

export default router;