import http from 'http';

import app from './app';
import { logger } from './common';
import { env } from './config';
import { sequelize } from './db';

process.on('rejectionHandled', () => null); // so node stops dumping rejectionHandled messages to stdout
process.on('unhandledRejection', (_, promise) => {
  promise.catch((e) => logger.fatal('unhandle rejection', e));
});

// if not using migrations
sequelize.sync({ force: false }).catch((e) => logger.error(e));

const server = http.createServer(app);

server.listen(env.port);
server.on('listening', () => logger.info(`server running on port ${env.port}`));
