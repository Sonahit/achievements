import { IEventHandler } from '@src/shared/modules/cqrs/domain/IEventHandler';
import { Type } from '@src/shared/types';
import { FastifyInstance } from 'fastify';
import { RemoveAchievementEvent } from '../impl/remove-achievement.event';

export class RemoveAchievementHandler implements IEventHandler<RemoveAchievementEvent> {
  constructor(private app: FastifyInstance) {}

  getSource(): Type<RemoveAchievementEvent> {
    return RemoveAchievementEvent;
  }

  handle(event: RemoveAchievementEvent) {
    this.app.log.info(`Handled ${event.constructor.name}`);
  }
}
