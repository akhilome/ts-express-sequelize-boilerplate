import dotenv from 'dotenv';
dotenv.config();

export const env = {
  port: process.env.PORT || 8080,
  logging: {
    level: process.env.LOGGING_LEVEL || 'info',
  },
  database: {
    dialect: process.env.DATABASE_DIALECT || 'postgres',
    url: process.env.DATABASE_URL!,
  },
};
