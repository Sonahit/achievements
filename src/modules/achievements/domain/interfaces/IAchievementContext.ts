import { User } from '@src/modules/users/entities/user.entity';

export interface IAchievementContext {
  user: User;
  conditions: Record<string, any>;
}
