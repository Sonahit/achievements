import { IAchievementContext } from '../interfaces/IAchievementContext';
import { BaseCondition } from './base-condition';

export class SimpleCondition extends BaseCondition {
  canActive(ctx: IAchievementContext): boolean {
    throw new Error('Method not implemented.');
  }
}
