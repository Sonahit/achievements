import { State } from '@src/shared/domain/State';
import { ConditionConcreteTypes, ConditionConstructor, ConditionTypes } from '../condition.types';
import { CountBasedCondition } from '../conditions/count-based';
import { SimpleCondition } from '../conditions/simple';

export const createConditionFactory: ConditionConstructor = <T extends ConditionTypes>(
  type: T,
  state: State,
): ConditionConcreteTypes[T] =>
  new ({
    simple: SimpleCondition,
    ['count-based']: CountBasedCondition,
  }[type] as any)(state);
