import { FastifySchema } from 'fastify';
import { JSONSchema7 } from 'json-schema';

export const signInSchema: FastifySchema = {
  body: {
    required: ['login', 'password'],
    properties: {
      login: {
        type: 'string',
        minLength: 1,
      },
      password: {
        type: 'string',
        minLength: 1,
      },
    },
  } as JSONSchema7,
  response: {
    '2xx': {
      type: 'object',
      properties: {
        token: {
          type: 'string',
        },
        type: {
          type: 'string',
          enum: ['Basic', 'Bearer'],
        },
      },
    } as JSONSchema7,
  },
};
