import { User } from '@src/modules/users/entities/user.entity';

export interface IAchievementContext<Conditions = Record<string, any>> {
  user: User;
  conditions: Conditions;
}
