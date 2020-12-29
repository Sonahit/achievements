import { ConditionOptions, ConditionTypes } from '../../domain/condition.types';

export type CreateAchievementDto<T extends ConditionTypes = ConditionTypes> = {
  name: string;

  state: ConditionOptions[T] & { type: T };
};
