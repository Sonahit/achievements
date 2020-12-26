import { IAchievementContext } from './IAchievementContext';

export interface IAchievementCondition {
  canActive(user: IAchievementContext): boolean;
}
