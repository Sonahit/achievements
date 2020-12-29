import { FastifySchema } from 'fastify';
import { JSONSchema7 } from 'json-schema';

export const getAchievementsSchema: FastifySchema = {
  response: {
    '2xx': {
      type: 'array',
      items: {
        $ref: 'achievement#',
      },
    } as JSONSchema7,
  },
};
