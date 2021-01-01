import { FastifyInstance } from 'fastify';

export default (fastify: FastifyInstance): FastifyInstance => {
  fastify.log.info('Registered auth routes');

  return fastify.register(
    (fastify: FastifyInstance, _: any, done: (err?: Error) => void) => {
      fastify.get('/', {}, async function () {
        return 'false';
      });
      done();
    },
    {
      prefix: 'auth',
    },
  );
};
