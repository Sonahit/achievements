import httpError from 'http-errors';
import { AchievementType } from '../../entities/achievement.entity';
import { achievementRepository } from '../../repositories/index';

export const getAchievement = async (id: number): Promise<AchievementType> => {
  const achievement = await achievementRepository.findOne({
    id,
  });
  if (!achievement) {
    throw new httpError[404]();
  }
  return achievement.toJSON();
};
