import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import httpError from 'http-errors';

export default fp(
  (fastify: FastifyInstance, _: any, done: (err?: Error | undefined) => void) => {
    fastify.addHook('onSend', (_, rep, payload: any, next) => {
      const data = {
        statusCode: rep.statusCode,
        error: rep.statusCode >= 400 ? httpError(rep.statusCode).message : '',
        message: httpError(rep.statusCode).message,
      } as Record<string, any>;

      if (payload?.messags) {
        data.message = payload.message;
      }

      if (payload?.data) {
        data.data = payload.data;
      }

      if (payload?.error) {
        data.error = payload.error;
      }

      if (typeof payload === 'string') {
        data.data = JSON.parse(payload);
      }
      next(null, JSON.stringify(data));
    });
    done();
  },
  {
    name: 'env',
    fastify: '>=3.0',
  },
);
