import Fastify from 'fastify';
import modules from './modules';
import routes from './routes';

const fastify = Fastify({
  logger: true,
  ignoreTrailingSlash: true,
});

fastify
  .register(modules)
  .register(routes)
  .listen(process.env.PORT || 3000);
