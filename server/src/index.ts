import path from 'path';
import express, { Request, Response } from 'express';
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
app.use(express.static(path.join(__dirname, '../../client/build/')));
app.use(routes);

app.use(
  (
    error: Error & { status: number; message: string },
    req: Request,
    res: Response
  ) => {
    res.status(error.status ?? 500).json({
      message: error.message,
    });
  }
);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
