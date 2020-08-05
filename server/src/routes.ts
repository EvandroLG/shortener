import { Router } from 'express';
import { schema, urls } from './schemas';
import { nanoid } from 'nanoid';

const router = Router();

router.get('/', (req, res) => res.send('root'));

router.post('/url', async (req, res, next) => {
  const { slug, url } = req.body;

  try {
    await schema.validate({
      slug,
      url,
    });

    const _slug = (slug ?? nanoid(5)).toLowerCase();
    const created = await urls.insert({ urls, slug: _slug });

    res.json(created);
  } catch (e) {
    next(e);
  }
});

router.get('/:id', (req, res) => res.json());

export default router;
