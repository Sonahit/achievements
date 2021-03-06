import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import achievements from './achievements/achievements.module';
import authModule from './auth/auth.module';
import namingModule from './naming/naming.module';
import users from './users/users.module';

const modules = (fastify: FastifyInstance, _: any, done: (err?: Error) => void) => {
  fastify
    .register(achievements)
    .register(users)
    .register(namingModule)
    .register(authModule)
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
