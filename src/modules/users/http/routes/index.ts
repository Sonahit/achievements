import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';

export default fp(function (fastify: FastifyInstance, _: any, done: (err?: Error) => void): void {
  fastify.log.info('Registered user routes');
  fastify.get('/users/', {}, async function () {
    return 'false';
  });
  done();
});
