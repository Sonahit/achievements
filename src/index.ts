import Fastify from 'fastify';
import routes from './http/routes';
import modules from './modules';
import db from './plugins/db';
import env from './plugins/env';
import reply from './plugins/reply';
import shared from './shared/modules';

const fastify = Fastify({
  logger: true,
  ignoreTrailingSlash: true,
});

fastify
  .register(env)
  .register(db)
  .register(shared)
  .register(modules)
  .register(routes)
  .register(reply)
  .listen(process.env.PORT || 3000);
const graceExit = () => {
  fastify.knex.destroy();
};
process.on('exit', graceExit);
