import { IEventHandler } from '@src/shared/modules/cqrs/domain/IEventHandler';
import { Type } from '@src/shared/types';
import { FastifyInstance } from 'fastify';
import { GiveAchievementEvent } from '../impl/give-achievement.event';

export class GiveAchievementHandler implements IEventHandler<GiveAchievementEvent> {
  constructor(private app: FastifyInstance) {}

  getSource(): Type<GiveAchievementEvent> {
    return GiveAchievementEvent;
  }

  handle(event: GiveAchievementEvent): void {
    this.app.log.info(`Handled ${event.constructor.name}`);
  }
}
