/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Entity } from '../../../shared/domain/Entity';

export class Achievement extends Entity {
  static get tableName(): string {
    return 'achievements';
  }
}

export type AchievementType = {
  id?: number;

  name: string;
};

export const schema = {
  $id: 'achievement',
  required: ['name'],
  properties: {
    id: {
      type: 'number',
    },
    name: {
      type: 'string',
    },
  },
};
