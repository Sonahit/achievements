import { FastifySchema } from 'fastify';
import { JSONSchema7 } from 'json-schema';

export const getUserAchievementsSchema: FastifySchema = {
  headers: {
    type: 'object',
    required: ['authorization'],
    properties: {
      authorization: {
        type: 'string',
      },
    },
  } as JSONSchema7,
  response: {
    '2xx': {
      type: 'array',
      items: {
        $ref: 'achievement#',
      },
    } as JSONSchema7,
  },
};
