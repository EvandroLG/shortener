import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.send('root'));
router.post('/url', (req, res) => res.json());
router.get('/:id', (req, res) => res.json());

export default router;
