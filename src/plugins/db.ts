import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import knex from 'knex';
import { Model } from 'objection';

const db = (
  fastify: FastifyInstance,
  options: {
    db: string;
    port: number;
    user: string;
    password?: string;
  },
  done: (err?: Error) => void,
) => {
  const knexInstance = knex({
    client: 'pg',
    connection: {
      ...options,
    },
  });
  fastify.decorate('knex', knexInstance);
  fastify.log.info('Registered db plugin');
  Model.knex(knexInstance);
  done();
};

export default fp(db, {
  dependencies: ['env'],
  fastify: '>=3.0',
  name: 'db',
});
