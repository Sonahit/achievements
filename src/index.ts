import Fastify from 'fastify';
import modules from './modules';
import db from './plugins/db';
import env from './plugins/env';
import reply from './plugins/reply';
import routes from './routes';

const fastify = Fastify({
  logger: true,
  ignoreTrailingSlash: true,
});

fastify
  .register(env)
  .register(db)
  .register(modules)
  .register(routes)
  .register(reply)
  .listen(process.env.PORT || 3000);
const graceExit = () => {
  fastify.knex.destroy();
};
process.on('exit', graceExit);
