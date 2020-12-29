import { FastifySchema } from 'fastify';
import { ConditionOptions, ConditionTypes } from '../../domain/condition.types';

export type CreateAchievementDto<T extends ConditionTypes = ConditionTypes> = {
  name: string;

  type: T;

  state: ConditionOptions[T];
};

export const createAchievementSchema: FastifySchema = {
  body: {
    type: 'object',
    required: ['name', 'type'],
    properties: {
      name: {
        type: 'string',
      },
      type: {
        type: 'string',
        enum: ['count-based', 'simple'] as ConditionTypes[],
      },
      state: {
        type: 'object',
        oneOf: [
          {
            type: 'object',
            additionalProperties: {
              count: {
                type: 'number',
              },
            },
            dependencies: {
              count: {
                properties: {
                  type: {
                    const: 'count-based',
                  },
                },
                required: ['type'],
              },
            },
          },
        ] as ConditionOptions[ConditionTypes],
      },
    },
  },
};
