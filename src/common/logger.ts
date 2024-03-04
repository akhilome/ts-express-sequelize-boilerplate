import pino from 'pino';
import { env } from '../config';

export const logger = pino({
  formatters: {
    level: (level) => ({ level }),
  },
  level: env.logging.level,
});
