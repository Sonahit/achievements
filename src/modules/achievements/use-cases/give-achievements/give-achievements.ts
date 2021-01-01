import { userRepository } from '@src/modules/users/repositories';
import createHttpError from 'http-errors';
import { AchievementType } from '../../entities/achievement.entity';
import { achievementRepository, achievementUserRepository } from '../../repositories';

export const giveAchievements = async (userId: number, achievementIds: number[]): Promise<AchievementType[]> => {
  const user = await userRepository.query().findById(userId);
  if (!user) {
    throw new createHttpError.BadRequest();
  }
  const userAchievements = await achievementUserRepository.getUserAchievements(user);

  const givenAchievements = achievementIds.filter((v) =>
    userAchievements.some(({ achievementId }) => achievementId === v),
  );

  const insertedAchivements = givenAchievements.length
    ? await achievementUserRepository
        .query()
        .insert(givenAchievements.map((achievementId) => ({ userId, achievementId })))
    : [];

  const achievements = await achievementRepository
    .query()
    .findByIds(insertedAchivements.map(({ achievementId }) => achievementId));

  return achievements;
};
