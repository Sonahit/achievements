/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Entity } from '../../../shared/domain/Entity';

export class User extends Entity {
  static get tableName(): string {
    return 'users';
  }
}

export const schema = {
  $id: 'user',
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
