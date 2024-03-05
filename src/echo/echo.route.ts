import { Response, Router } from 'express';
import { SuccessResponseObject } from '../common';
import { Echo } from '../db/models/echo';

export const echoRouter = Router();

echoRouter.get('/', async (_, res: Response) => {
  const data = await Echo.findAll();

  res.json(new SuccessResponseObject('dataaaa', data));
});

echoRouter.post('/', async (_, res: Response): Promise<void> => {
  const created = await Echo.create({ name: `rand-${Date.now()}` });

  res.json(new SuccessResponseObject('created', created));
});
