import { FastifyInstance } from 'fastify';
import { GiveAchievementEvent } from '../../domain/events';
import { getAchievements } from '../../use-cases/get-achievements/get-achievements';
import { getAchievementSchema } from './schemas';

export default (fastify: FastifyInstance): FastifyInstance => {
  fastify.log.info('Registered achievement routes');
  return fastify.register(
    (f, _, d) => {
      f.get(
        '/',
        {
          schema: getAchievementSchema,
        },
        async () => {
          fastify.cqrs.eventBus.publish(new GiveAchievementEvent('' as any, '' as any));
          return await getAchievements();
        },
      );
      d();
    },
    { prefix: 'achievements' },
  );
};
