import { User } from '@src/modules/users/entities/user.entity';
import { IAchievementContext } from '../interfaces/IAchievementContext';
import { BaseCondition } from './base-condition';

export class CountBasedCondition extends BaseCondition {
  canActive(ctx: IAchievementContext): boolean {
    throw new Error('Method not implemented.');
  }
}
