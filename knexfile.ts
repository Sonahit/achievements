import dotenv from 'dotenv';
import { Config } from 'knex';
import { join } from 'path';

dotenv.config();

export default {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    port: +(process.env.DB_PORT || 5432),
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  migrations: {
    directory: join(__dirname, 'src', 'database', 'migrations'),
  },
} as Config;
