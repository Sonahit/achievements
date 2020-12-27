import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';

const router = (fastify: FastifyInstance, _: any, done: (err?: Error) => void) => {
  fastify.log.info('Registered naming router');
  done();
};

export default fp(router, {
  name: 'naming-router',
});
