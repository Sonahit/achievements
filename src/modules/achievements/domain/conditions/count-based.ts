import { ConditionOptions } from '../condition.types';
import { IAchievementContext } from '../interfaces/IAchievementContext';
import { BaseCondition } from './base-condition';

type Props = {
  count: number;
};
export class CountBasedCondition extends BaseCondition<ConditionOptions['count-based']> {
  async canActive(ctx: IAchievementContext<Props>): Promise<boolean> {
    const { conditions } = ctx;
    return conditions.count >= this.state.get<number>('count');
  }
}
