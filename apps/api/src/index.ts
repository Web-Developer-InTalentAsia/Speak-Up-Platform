import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import type { HealthResponse } from '@speak-up/shared';

const app = express();
const port = Number(process.env.API_PORT ?? 4000);

app.use(cors());
app.use(express.json());

app.get('/api/health', (_request, response) => {
  const payload: HealthResponse = { status: 'ok', service: 'speak-up-api' };
  response.json(payload);
});

app.listen(port, () => {
  console.log(`Speak Up API listening on http://localhost:${port}`);
});
