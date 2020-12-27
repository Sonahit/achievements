import { ConditionTypes } from '../domain/condition.types';

export type AchievementDto = {
  id: number;

  name: string;

  type: ConditionTypes;

  state: Record<string, any>;
};
