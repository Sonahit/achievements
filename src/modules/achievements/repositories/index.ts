import { Achievement } from '../entities/achievement.entity';
import { AchievementRepository } from './impl/achievement.repository';

const achievementRepository = new AchievementRepository(Achievement);

export { achievementRepository };
