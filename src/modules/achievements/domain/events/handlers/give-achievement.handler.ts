import { AchievementUser } from '@src/modules/achievements/entities/achievement-user.entity';
import { Achievement } from '@src/modules/achievements/entities/achievement.entity';
import { User } from '@src/modules/users/entities/user.entity';
import { IEventHandler } from '@src/shared/modules/cqrs/domain/IEventHandler';
import { Type } from '@src/shared/types';
import { FastifyInstance } from 'fastify';
import { GiveAchievementEvent } from '../impl/give-achievement.event';

export class GiveAchievementHandler implements IEventHandler<GiveAchievementEvent> {
  constructor(private app: FastifyInstance) {}

  getSource(): Type<GiveAchievementEvent> {
    return GiveAchievementEvent;
  }

  async giveAchievement(user: User, achievement: Achievement): Promise<AchievementUser> {
    const query = AchievementUser.query();
    const where = {
      achievementId: achievement.id,
      userId: user.id,
    };
    let au = await query.clone().findOne(where);

    if (!au) {
      au = await query.clone().insert(where);
    }

    return au;
  }

  async handle(event: GiveAchievementEvent): Promise<void> {
    const { achievement, user, force } = event;

    const { condition } = achievement;

    if (!condition || force || (condition && condition.canActive({ user, conditions: achievement.state }))) {
      await this.giveAchievement(user, achievement);
    }
    this.app.log.info(`Handled ${event.constructor.name}`);
  }
}
