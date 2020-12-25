import Knex from 'knex';

declare module 'fastify' {
  export interface FastifyInstance {
    env: Record<string, any>;
    knex: Knex;
  }
}
