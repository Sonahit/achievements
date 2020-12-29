import { FastifySchema } from 'fastify';
import { JSONSchema7 } from 'json-schema';

export const getAchievementSchema: FastifySchema = {
  response: {
    '2xx': {
      $ref: 'achievement#',
    } as JSONSchema7,
  },
};
