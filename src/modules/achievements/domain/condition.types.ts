import { State } from '@src/shared/domain/State';
import { CountBasedCondition } from './conditions/count-based';
import { SimpleCondition } from './conditions/simple';

export type ConditionTypes = 'simple' | 'count-based';

export type ConditionConcreteTypes = {
  simple: SimpleCondition;
  ['count-based']: CountBasedCondition;
};

export type ConditionOptions = {
  simple: Record<string, any>;
  ['count-based']: { count: number };
};

export type ConditionConstructor = <T extends ConditionTypes>(
  type: T,
  state: State<any, ConditionOptions[T]>,
) => ConditionConcreteTypes[T];
