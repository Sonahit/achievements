/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Entity } from '../../../shared/domain/Entity';
import { JSONSchema7 } from 'json-schema';

export class User extends Entity {
  id!: number;

  name!: string;

  login!: string;

  password!: string;

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
  required: ['name', 'login'],
  properties: {
    id: {
      type: 'number',
    },
    name: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
    login: {
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
