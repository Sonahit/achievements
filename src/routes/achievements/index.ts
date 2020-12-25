import { FastifyInstance } from 'fastify';
import { AchievementType } from '../../modules/achievements/entities/achievement.entity';
import { getAchievementSchema } from './schemas';

export default (fastify: FastifyInstance): FastifyInstance => {
  fastify.log.info('Registered achievement routes');
  return fastify.register(
    (f, _, d) => {
      f.get<{ Reply: AchievementType }>(
        '/',
        {
          schema: getAchievementSchema,
        },
        (req, rep) => {
          rep.send({
            name: 'HELLO_WORLD',
          });
        },
      );
      d();
    },
    { prefix: 'achievements' },
  );
};
