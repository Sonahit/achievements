import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import { schemas } from './entities';

const usersModule = (fastify: FastifyInstance, _: any, done: (err?: Error) => void) => {
  Object.values(schemas).forEach((v) => fastify.addSchema(v));
  fastify.log.info('Registered users module');
  done();
};

export default fp(usersModule, {
  name: 'users-module',
  fastify: '>= 3.0',
});
