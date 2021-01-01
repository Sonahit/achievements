/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Entity } from '../../../shared/domain/Entity';
import { JSONSchema7 } from 'json-schema';

export class User extends Entity {
  id!: number;

  name!: string;

  token!: string | null;

  static get tableName(): string {
    return 'users';
  }

  static get jsonSchema() {
    return schema;
  }
}

export const schema: JSONSchema7 = {
  $id: 'user',
  required: ['name'],
  properties: {
    id: {
      type: 'number',
    },
    name: {
      type: 'string',
    },
    token: {
      oneOf: [
        {
          type: 'string',
        },
        {
          type: 'null',
        },
      ],
    },
  },
};
