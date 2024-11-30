import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { router } from './router';

const app = express();

app.use(express.json());
app.use(cors());
app.use(router)

const port = 4000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
