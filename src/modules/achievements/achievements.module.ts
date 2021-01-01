import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import { GiveAchievementHandler } from './domain/events/handlers/give-achievement.handler';
import { RemoveAchievementHandler } from './domain/events/handlers/remove-achievement.handler';
import { schemas } from './entities';

const achievementModule = (fastify: FastifyInstance, _: any, done: (err?: Error) => void) => {
  const handlers = [new RemoveAchievementHandler(fastify), new GiveAchievementHandler(fastify)];
  Object.values(schemas).forEach((v) => fastify.addSchema(v));
  fastify.log.info('Registered achievement module');
  fastify.cqrs.service.register(...handlers);
  done();
};

export default fp(achievementModule, {
  name: 'achievement-module',
  fastify: '>= 3.0',
});
