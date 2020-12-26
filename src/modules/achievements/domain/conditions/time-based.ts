import { ConditionOptions } from '../condition.types';
import { IAchievementContext } from '../interfaces/IAchievementContext';
import { BaseCondition } from './base-condition';

type Props = {
  currentDate: number;
};
export class TimeBasedCondition extends BaseCondition<ConditionOptions['time-based']> {
  canActive(ctx: IAchievementContext<Props>): boolean {
    const { conditions } = ctx;
    const { currentDate } = conditions;

    return currentDate <= this.state.get('expiredAt');
  }
}
