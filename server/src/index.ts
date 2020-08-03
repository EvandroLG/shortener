import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import routes from './routes';

const port = process.env.PORT || 9090;
const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
