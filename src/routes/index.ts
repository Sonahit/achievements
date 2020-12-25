import { FastifyInstance } from 'fastify';
import achievementsRouter from './achievements';
import fp from 'fastify-plugin';

const routes = (fastify: FastifyInstance, _: any, done: (err?: Error | undefined) => void) => {
  fastify.register(achievementsRouter).after((e) => {
    if (e) return done(e);
    fastify.log.info('Registered routes');
  });

  done();
};

export default fp(routes, {
  name: 'routes',
  fastify: '>=3.0',
});
