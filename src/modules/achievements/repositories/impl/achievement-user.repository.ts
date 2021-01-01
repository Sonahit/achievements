import { User } from '@src/modules/users/entities/user.entity';
import { Repository } from '@src/shared/core/Repository';
import { AchievementUser } from '../../entities/achievement-user.entity';

export class AchievementUserRepository extends Repository<AchievementUser> {
  async getUserAchievements(user: User): Promise<AchievementUser[]> {
    return await this.query().where('userId', user.id);
  }
}
