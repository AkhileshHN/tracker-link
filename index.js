
import express from 'express';
import authRouter from './auth.js';
import 'dotenv/config';

const app = express();

app.use(express.json());

app.use('/api', authRouter);

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

export default app;