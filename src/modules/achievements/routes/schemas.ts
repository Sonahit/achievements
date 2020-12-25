import { FastifySchema } from 'fastify';

export const getAchievementSchema: FastifySchema = {
  response: {
    '2xx': {
      $ref: 'achievement#',
    },
  },
};
