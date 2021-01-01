import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';

const auth = (fastify: FastifyInstance, _: any, done: (err?: Error) => void) => {
  fastify.log.info('Registered auth plugin');
  done();
};

export default fp(auth, {
  name: 'auth',
});
