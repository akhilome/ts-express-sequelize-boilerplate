import { Response, Router } from 'express';
import { SuccessResponseObject } from '../common';

export const echoRouter = Router();

echoRouter.get('/', (_, res: Response) => res.json(new SuccessResponseObject('demo path live 🚀')));
