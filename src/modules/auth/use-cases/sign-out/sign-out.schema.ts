import { FastifySchema } from 'fastify';
import { JSONSchema7 } from 'json-schema';

export const signUpSchema: FastifySchema = {
  headers: {
    type: 'object',
    required: ['authorization'],
    properties: {
      authorization: {
        type: 'string',
      },
    },
  } as JSONSchema7,
};
