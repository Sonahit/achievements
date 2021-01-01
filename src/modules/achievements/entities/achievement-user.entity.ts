import { JSONSchema7 } from 'json-schema';
import { Model } from 'objection';

export class AchievementUser extends Model {
  userId!: number;

  achievementId!: number;

  static get tableName(): string {
    return 'achievement-user';
  }

  static get jsonSchema(): JSONSchema7 {
    return schema;
  }
}

export type AchievementUserType = {
  userId: number;

  achievementId: number;
};

export const schema: JSONSchema7 = {
  $id: 'achievement-user',
  required: ['userId', 'achievementId'],
  properties: {
    userId: {
      type: 'number',
    },
    achievementId: {
      type: 'number',
    },
  },
};
