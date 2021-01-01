import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import httpError from 'http-errors';

export default fp(
  (fastify: FastifyInstance, _: any, done: (err?: Error | undefined) => void) => {
    fastify.log.info('Registered plugin reply');
    fastify.addHook('onSend', (_, rep, payload: any, next) => {
      let data = {
        statusCode: rep.statusCode,
        error: rep.statusCode >= 400 ? httpError(rep.statusCode).message : '',
        message: rep.statusCode < 400 ? 'OK' : httpError(rep.statusCode).message,
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
        if (rep.statusCode >= 400) {
          data = JSON.parse(payload);
        } else {
          data.data = JSON.parse(payload);
        }
      }
      next(null, JSON.stringify(data));
    });
    done();
  },
  {
    name: 'reply',
    fastify: '>=3.0',
  },
);
