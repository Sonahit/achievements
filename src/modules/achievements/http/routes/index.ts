import { FastifyInstance } from 'fastify';
import { getAchievements } from '../../use-cases/get-achievements/get-achievements';
import { getAchievementSchema } from '../../use-cases/get-achievement/get-achievement.schema';
import { getAchievementsSchema } from '../../use-cases/get-achievements/get-achievements.schema';
import { getAchievement } from '../../use-cases/get-achievement';
import { AchievementType } from '../../entities/achievement.entity';
import { createAchievement } from '../../use-cases/create-achievement/create-achievement';
import { createAchievementSchema } from '../../use-cases/create-achievement/create-achievement.schema';
import { CreateAchievementDto } from '../../use-cases/create-achievement/create-achievement.dto';

export default (fastify: FastifyInstance): FastifyInstance => {
  fastify.log.info('Registered achievement routes');
  return fastify.register(
    (f, _, d) => {
      f.get(
        '/',
        {
          schema: getAchievementsSchema,
        },
        async () => {
          return await getAchievements();
        },
      )
        .get<{ Params: { id: number } }>(
          '/:id',
          {
            schema: getAchievementSchema,
          },
          async (req) => {
            return await getAchievement(req.params.id);
          },
        )
        .post<{ Body: CreateAchievementDto }>(
          '/',
          {
            schema: createAchievementSchema,
          },
          async (req) => {
            return await createAchievement(req.body);
          },
        );
      d();
    },
    { prefix: 'achievements' },
  );
};
