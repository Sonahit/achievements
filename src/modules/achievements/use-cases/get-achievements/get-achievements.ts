import { AchievementType } from '../../entities/achievement.entity';
import { achievementRepository } from '../../repositories';

export const getAchievements = async (): Promise<AchievementType[]> => {
  return (await achievementRepository.query().orderBy('id')).map((a) => a.toJSON());
};
