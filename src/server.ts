import http from 'http';

import app from './app';
import { logger } from './common';
import { env } from './config';

process.on('rejectionHandled', () => null); // so node stops dumping rejectionHandled messages to stdout
process.on('unhandledRejection', (_, promise) => {
  promise.catch((e) => logger.fatal('unhandle rejectio', e));
});

const server = http.createServer(app);

server.listen(env.port);
server.on('listening', () => logger.info(`server running on port ${env.port}`));
