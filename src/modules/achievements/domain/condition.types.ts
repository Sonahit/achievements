import { State } from '@src/shared/domain/State';
import { CountBasedCondition } from './conditions/count-based';
import { SimpleCondition } from './conditions/simple';
import { TimeBasedCondition } from './conditions/time-based';

export type ConditionTypes = 'simple' | 'count-based' | 'time-based';

export type ConditionConcreteTypes = {
  simple: SimpleCondition;
  ['count-based']: CountBasedCondition;
  ['time-based']: TimeBasedCondition;
};

export type ConditionOptions = {
  simple: Record<string, any>;
  ['count-based']: Record<string, any> & { count: number };
  ['time-based']: Record<string, any> & { count: number; expiredAt: number };
};

export type ConditionConstructor = <T extends ConditionTypes>(
  type: T,
  state: State<any, ConditionOptions[T]>,
) => ConditionConcreteTypes[T];
