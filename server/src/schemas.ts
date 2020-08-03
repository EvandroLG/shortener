import { object, string } from 'yup';

const schema = object().shape({
  slug: string().trim().matches(/\w\-/i),
  url: string().trim().url().required(),
});

export default schema;
