import { object, string } from 'yup';
import monk from 'monk';

export const schema = object().shape({
  slug: string().trim().matches(/\w/i),
  url: string().trim().url().required(),
});

export const db = monk('localhost:27017/shortener');
export const urls = db.get('urls');
urls.createIndex('slug', { unique: true });
