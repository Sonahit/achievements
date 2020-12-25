import Fastify from 'fastify';
import modules from './modules';
import db from './plugins/db';
import env from './plugins/env';
import routes from './routes';

const fastify = Fastify({
  logger: true,
  ignoreTrailingSlash: true,
});

fastify
  .register(env)
  .register(db, {
    db: process.env.DB_NAME || '',
    password: process.env.DB_PASSWORD || '',
    user: process.env.DB_USER || '',
    port: +(process.env.DB_PORT || 5432),
  })
  .register(modules)
  .register(routes)
  .listen(process.env.PORT || 3000);
