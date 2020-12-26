import { State } from '@src/shared/domain/State';
import { IAchievementCondition } from '../interfaces/IAchievementCondition';
import { IAchievementContext } from '../interfaces/IAchievementContext';

export abstract class BaseCondition<T extends Record<string, any> = Record<string, any>>
  implements IAchievementCondition {
  constructor(protected state: State<any, T>) {}

  abstract canActive(context: IAchievementContext): Promise<boolean> | boolean;
}
