import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import cqrs from './cqrs/cqrs';

export default fp(
  (fastify: FastifyInstance, _: any, done: (err?: Error) => void) => {
    fastify.register(cqrs).after((e) => {
      if (e) return done(e);
      fastify.log.info('Registered shared modules');
    });
    done();
  },
  {
    name: 'shared-module',
    fastify: '>=3.0',
  },
);
