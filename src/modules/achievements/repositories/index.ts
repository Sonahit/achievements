import { AchievementUser } from '../entities/achievement-user.entity';
import { Achievement } from '../entities/achievement.entity';
import { AchievementUserRepository } from './impl/achievement-user.repository';
import { AchievementRepository } from './impl/achievement.repository';

const achievementRepository = new AchievementRepository(Achievement);
const achievementUserRepository = new AchievementUserRepository(AchievementUser);

export { achievementRepository, achievementUserRepository };
