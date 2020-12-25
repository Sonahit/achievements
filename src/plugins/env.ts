import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import dotenv from 'dotenv';

export default fp(
  (fastify: FastifyInstance, _: any, done: (err?: Error | undefined) => void) => {
    const env = dotenv.config();
    fastify.decorate('env', env.parsed);
    done();
  },
  {
    fastify: 'env',
  },
);
