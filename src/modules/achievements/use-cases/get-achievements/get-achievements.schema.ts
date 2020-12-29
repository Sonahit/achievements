import { FastifySchema } from 'fastify';

export const getAchievementsSchema: FastifySchema = {
  response: {
    '2xx': {
      type: 'array',
      items: {
        $ref: 'achievement#',
      },
    },
  },
};
