import { State } from '@src/shared/domain/State';
import { IAchievementCondition } from '../interfaces/IAchievementCondition';
import { IAchievementContext } from '../interfaces/IAchievementContext';

export abstract class BaseCondition implements IAchievementCondition {
  constructor(protected state: State) {}

  abstract canActive(context: IAchievementContext): boolean;
}
