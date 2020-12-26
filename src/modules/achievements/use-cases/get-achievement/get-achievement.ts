import { Achievement, AchievementType } from '../../entities/achievement.entity';
import { achievementRepository } from '../../repositories/index';

export const getAchievement = async (): Promise<AchievementType> => {
  const name = 'HELLOW_RWOLRDS';
  const achievement = await achievementRepository.findOne({
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
};
