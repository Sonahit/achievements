/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import achievementRoutes from '@src/modules/achievements/http/routes';
import userRoutes from '@src/modules/users/http/routes';
import namingRoutes from '@src/modules/naming/http/routes';
import authRoutes from '@src/modules/auth/http/routes';
import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';

export default fp(
  function (fastify: FastifyInstance, _: any, done: (err?: Error) => void): void {
    fastify
      .register(authRoutes)
      .register(achievementRoutes)
      .register(userRoutes)
      .register(namingRoutes)
      .after((e) => {
        if (e) return done(e);
        fastify.log.info('Registered routes');
      });
    done();
  },
  {
    name: 'routes',
    fastify: '>=3.0',
  },
);
