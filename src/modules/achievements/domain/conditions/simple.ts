import { ConditionOptions } from '../condition.types';
import { BaseCondition } from './base-condition';

export class SimpleCondition extends BaseCondition<ConditionOptions['simple']> {
  async canActive(): Promise<boolean> {
    return true;
  }
}
