import { User } from '@src/modules/users/entities/user.entity';
import { IEvent } from '@src/shared/modules/cqrs/domain/IEvent';
import { Achievement } from '../../../entities/achievement.entity';

export class GiveAchievementEvent implements IEvent {
  constructor(public achievement: Achievement, public user: User) {}
}
