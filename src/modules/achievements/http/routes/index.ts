import { FastifyInstance } from 'fastify';
import { getAchievements } from '../../use-cases/get-achievements/get-achievements';
import { getAchievementSchema } from '../../use-cases/get-achievement/get-achievement.schema';
import { getAchievementsSchema } from '../../use-cases/get-achievements/get-achievements.schema';
import { getAchievement } from '../../use-cases/get-achievement';
import { createAchievement } from '../../use-cases/create-achievement/create-achievement';
import { createAchievementSchema } from '../../use-cases/create-achievement/create-achievement.schema';
import { CreateAchievementDto } from '../../use-cases/create-achievement/create-achievement.dto';
import { getUserAchievementsSchema } from '../../use-cases/get-user-achievements/get-user-achievements.schema';
import { getUserAchievements } from '../../use-cases/get-user-achievements/get-user-achievements';
import { User } from '@src/modules/users/entities/user.entity';
import { giveAchievementsSchema } from '../../use-cases/give-achievements/give-achievements.schema';
import { giveAchievements } from '../../use-cases/give-achievements';
import { GiveAchievementDto } from '../../use-cases/give-achievements/give-achievements.dto';

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
        .get(
          '/me',
          {
            schema: getUserAchievementsSchema,
          },
          async (req) => {
            return getUserAchievements((req as any).user as User);
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
        )
        .post<{ Body: GiveAchievementDto }>(
          '/give',
          {
            schema: giveAchievementsSchema,
          },
          async (req) => {
            const { user, achievements } = req.body;
            return await giveAchievements(user, achievements);
          },
        );
      d();
    },
    { prefix: 'achievements' },
  );
};
