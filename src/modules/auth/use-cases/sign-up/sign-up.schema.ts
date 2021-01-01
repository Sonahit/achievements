import { FastifySchema } from 'fastify';
import { JSONSchema7 } from 'json-schema';

export const signUpSchema: FastifySchema = {
  body: {
    required: ['login', 'name', 'password', 'confirmPassword'],
    properties: {
      login: {
        type: 'string',
        minLength: 1,
      },
      name: {
        type: 'string',
        minLength: 1,
      },
      password: {
        type: 'string',
        minLength: 1,
      },
      confirmPassword: {
        type: 'string',
        minLength: 1,
      },
    },
  } as JSONSchema7,
};
