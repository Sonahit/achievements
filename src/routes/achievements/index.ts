import { FastifyInstance } from 'fastify';
import { Achievement, AchievementType } from '../../modules/achievements/entities/achievement.entity';
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
        async () => {
          const name = 'HELLOW_RWOLRDS';
          const achievement = await Achievement.query().findOne({
            name,
          });
          if (!achievement) {
            return (
              await Achievement.query().insert({
                name,
              })
            ).toJSON();
          }
          return achievement.toJSON();
        },
      );
      d();
    },
    { prefix: 'achievements' },
  );
};
