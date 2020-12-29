import { FastifySchema } from 'fastify';
import { ConditionOptions, ConditionTypes } from '../../domain/condition.types';
import { JSONSchema7 } from 'json-schema';

export type CreateAchievementDto<T extends ConditionTypes = ConditionTypes> = {
  name: string;

  state: ConditionOptions[T] & { type: T };
};

export const createAchievementSchema: FastifySchema = {
  body: {
    type: 'object',
    required: ['name', 'state'],
    definitions: {
      'type-simple': {
        type: 'object',
        properties: {
          type: {
            type: 'string',
            enum: ['simple'] as ConditionTypes[],
          },
        },
      },
      'type-count-based': {
        type: 'object',
        required: ['count'],
        properties: {
          count: {
            type: 'number',
          },
          type: {
            type: 'string',
            enum: ['count-based'] as ConditionTypes[],
          },
        },
      },
    },
    properties: {
      name: {
        type: 'string',
      },
      state: {
        type: 'object',
        oneOf: [
          {
            $ref: '#/definitions/type-simple',
          },
          {
            $ref: '#/definitions/type-count-based',
          },
        ],
      },
    },
  } as JSONSchema7,
};
