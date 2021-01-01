import Knex from 'knex';

declare namespace ms {
  export interface Environment {
    PORT: number;
    APP_URL: string;
    NODE_ENV: string;

    DB_TYPE: string;
    DB_HOST: string;
    DB_PORT: string;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_DATABASE: string;

    SECRET_KEY: string;
  }
}
declare module 'fastify' {
  export interface FastifyInstance {
    env: ms.Environment;

    knex: Knex;
  }
}
