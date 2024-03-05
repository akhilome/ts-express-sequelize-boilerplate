import { Dialect } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { env } from '../config';
import { logger } from '../common';

export const sequelize = new Sequelize(env.database.url, {
  dialect: env.database.dialect as Dialect,
  models: [__dirname + '/models'],
  logging: (sql) => logger.debug(sql),
});
