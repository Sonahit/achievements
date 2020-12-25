import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import achievements from './achievements/achievements.module';
import users from './users/users.module';

const modules = (fastify: FastifyInstance, _: any, done: (err?: Error) => void) => {
  fastify
    .register(achievements)
    .register(users)
    .after((e) => {
      if (e) return done(e);
      fastify.log.info('Registered modules');
    });
  done();
};

export default fp(modules, {
  name: 'app-modules',
  fastify: '>=3.0',
});
