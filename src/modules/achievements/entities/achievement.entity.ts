/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { State } from '@src/shared/domain/State';
import { JSONSchema7 } from 'json-schema';
import { Entity } from '../../../shared/domain/Entity';
import { ConditionTypes } from '../domain/condition.types';
import { createConditionFactory } from '../domain/factories/create-condition.factory';
import { IAchievementCondition } from '../domain/interfaces/IAchievementCondition';

export class Achievement extends Entity {
  id!: number;

  name!: string;

  state: Record<string, any> & { type: ConditionTypes } = { type: 'simple' };

  static get tableName(): string {
    return 'achievements';
  }

  static get jsonSchema() {
    return schema;
  }

  get condition(): IAchievementCondition | undefined {
    return createConditionFactory(this.state.type, new State(this.state));
  }
}

export type AchievementType = {
  id?: number;

  name: string;
};

export const schema: JSONSchema7 = {
  $id: 'achievement',
  required: ['name', 'state'],
  properties: {
    id: {
      type: 'number',
    },
    name: {
      type: 'string',
    },
    state: {
      type: 'object',
      required: ['type'],
      properties: {
        type: {
          type: 'string',
        },
        count: {
          type: 'number',
        },
      },
      default: {
        type: 'simple',
      },
    },
  },
};
