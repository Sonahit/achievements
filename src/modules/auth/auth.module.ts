import { FastifyInstance } from 'fastify';
import authPlugin from './plugins/auth';
import fp from 'fastify-plugin';
import { hash } from './auth.utils';

const authModule = (fastify: FastifyInstance, _: any, done: (err?: Error) => void) => {
  fastify.register(authPlugin).decorate('hash', hash(fastify.env.SECRET_KEY));
  fastify.log.info('Registered auth module');
  done();
};

export default fp(authModule, {
  name: 'auth-module',
  fastify: '>=3.0',
});
