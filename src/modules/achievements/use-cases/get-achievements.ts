import { Achievement, AchievementType } from '../entities/achievement.entity';

export const getAchievements = async (): Promise<AchievementType> => {
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
};
