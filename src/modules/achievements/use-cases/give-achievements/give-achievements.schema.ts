import { FastifySchema } from 'fastify';
import { JSONSchema7 } from 'json-schema';

export const giveAchievementsSchema: FastifySchema = {
  headers: {
    type: 'object',
    required: ['authorization'],
    properties: {
      authorization: {
        type: 'string',
      },
    },
  } as JSONSchema7,
  body: {
    type: 'object',
    required: ['user', 'achievements'],
    properties: {
      user: {
        type: 'number',
      },
      achievemnts: {
        type: 'array',
        items: {
          type: 'number',
        },
        minLength: 1,
      },
    },
  } as JSONSchema7,
  response: {
    '2xx': {
      type: 'object',
    } as JSONSchema7,
  },
};
