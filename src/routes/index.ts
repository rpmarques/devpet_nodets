import { Router } from 'express';

const router = Router();

//AQUI SETAMOS AS ROTAS
router.get('/', (req, res) => {
    res.send('início');
});

export default router;