import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import { schemas } from './entities';

const achievementModule = (fastify: FastifyInstance, _: any, done: (err?: Error) => void) => {
  Object.values(schemas).forEach((v) => fastify.addSchema(v));
  fastify.log.info('Registered acheivement module');
  done();
};

export default fp(achievementModule, {
  name: 'achievement-module',
  fastify: '>= 3.0',
});
