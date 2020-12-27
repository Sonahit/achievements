import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';

const namingModule = (fastify: FastifyInstance, _: any, done: (err?: Error) => void) => {
  fastify.log.info('Registered naming module');
  done();
};

export default fp(namingModule, {
  name: 'naming-module',
  fastify: '>=3.0',
});
