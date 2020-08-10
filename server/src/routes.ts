import path from 'path';
import { Router } from 'express';
import { schema, urls } from './schemas';
import { nanoid } from 'nanoid';

const router = Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

router.post('/url', async (req, res, next) => {
  const { slug, url } = req.body;

  try {
    await schema.validate({
      slug,
      url,
    });

    const _slug = (slug ?? nanoid(5)).toLowerCase();
    const created = await urls.insert({ url, slug: _slug });

    res.json(created);
  } catch (e) {
    next(e);
  }
});

router.get('/:slug', async (req, res, next) => {
  const { slug } = req.params;

  try {
    const result = await urls.findOne({ slug });
    res.redirect(result?.url ?? '/');
  } catch (e) {
    next(e);
  }
});

export default router;
