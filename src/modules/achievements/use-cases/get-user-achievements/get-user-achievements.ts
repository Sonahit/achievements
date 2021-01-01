import { User } from '@src/modules/users/entities/user.entity';
import { AchievementType } from '../../entities/achievement.entity';
import { achievementRepository, achievementUserRepository } from '../../repositories';

export const getUserAchievements = async (user: User): Promise<AchievementType[]> => {
  const userAchievements = await achievementUserRepository.getUserAchievements(user);
  const achievements = await achievementRepository.query().findByIds(userAchievements.map((a) => a.achievementId));
  return achievements;
};
