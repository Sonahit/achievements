import { IEventHandler } from '@src/shared/modules/cqrs/domain/IEventHandler';
import { Type } from '@src/shared/types';
import { RemoveAchievementEvent } from '../impl/remove-achievement.event';

export class RemoveAchievementHandler implements IEventHandler<RemoveAchievementEvent> {
  getSource(): Type<RemoveAchievementEvent> {
    return RemoveAchievementEvent;
  }

  handle(event: RemoveAchievementEvent) {
    throw new Error('Method not implemented.');
  }
}
