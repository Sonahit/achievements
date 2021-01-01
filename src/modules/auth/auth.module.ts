import { requireFiles } from '@src/shared/utils/fs';
import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import { join } from 'path';

const authModule = (fastify: FastifyInstance, _: any, done: (err?: Error) => void) => {
  fastify.log.info('Registered auth module');
  Object.values(requireFiles(join(__dirname, 'plugins'))).map((m) => fastify.register(m));
  done();
};

export default fp(authModule, {
  name: 'users-module',
  fastify: '>=3.0',
});
