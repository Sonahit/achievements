import { ConditionTypes } from '../domain/condition.types';

export type AchievementDto = {
  id: number;

  name: string;

  state: Record<string, any> & { type: ConditionTypes };
};
