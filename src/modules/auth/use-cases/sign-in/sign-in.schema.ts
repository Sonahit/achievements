import { FastifySchema } from 'fastify';
import { JSONSchema7 } from 'json-schema';

export const signUpSchema: FastifySchema = {
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
    type: 'object',
    properties: {
      token: {
        type: 'string',
      },
      type: {
        enum: ['Basic', 'Bearer'],
      },
    },
  } as JSONSchema7,
};
