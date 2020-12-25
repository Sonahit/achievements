import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import { schemas } from './entities';
import routes from './routes';

const achievementModule = (fastify: FastifyInstance, _: any, done: (err?: Error) => void) => {
  Object.values(schemas).forEach((v) => fastify.addSchema(v));
  fastify.register(routes).after((e) => {
    if (e) return done(e);
    fastify.log.info('Registered acheivement module');
  });
  done();
};

export default fp(achievementModule, {
  name: 'achievement-module',
  fastify: '>= 3.0',
});
