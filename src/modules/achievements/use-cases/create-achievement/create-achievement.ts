import { CreateAchievementDto } from './create-achievement.dto';
import { achievementRepository } from '../../repositories/index';
import { Achievement } from '../../entities/achievement.entity';

export const createAchievement = (createachievementDto: CreateAchievementDto): Promise<Achievement> => {
  const { type, name, state } = createachievementDto;
  return achievementRepository.query().insert({
    name,
    state,
    type,
  });
};
