import { IAchievementContext } from './IAchievementContext';

export interface IAchievementCondition {
  canActive(ctx: IAchievementContext): Promise<boolean> | boolean;
}
