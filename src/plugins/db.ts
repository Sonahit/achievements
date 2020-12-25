import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import knex from 'knex';
import { Model } from 'objection';

const db = (fastify: FastifyInstance, _: any, done: (err?: Error) => void) => {
  const connection = {
    database: fastify.env.DB_DATABASE || '',
    host: fastify.env.DB_HOST || '',
    password: fastify.env.DB_PASSWORD || '',
    user: fastify.env.DB_USERNAME || '',
    port: +(fastify.env.DB_PORT || 5432),
  };
  const knexInstance = knex({
    client: 'pg',
    connection,
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
