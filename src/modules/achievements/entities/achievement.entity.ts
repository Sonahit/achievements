/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { State } from '@src/shared/domain/State';
import { Entity } from '../../../shared/domain/Entity';
import { ConditionTypes } from '../domain/condition.types';
import { createConditionFactory } from '../domain/factories/create-condition.factory';
import { IAchievementCondition } from '../domain/interfaces/IAchievementCondition';

export class Achievement extends Entity {
  id!: number;

  name!: string;

  type!: ConditionTypes;

  state!: Record<string, any>;

  static get tableName(): string {
    return 'achievements';
  }

  static get jsonSchema() {
    return schema;
  }

  get condition(): IAchievementCondition {
    return createConditionFactory(this.type, new State(this.state));
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
    state: {
      type: 'object',
    },
  },
};
