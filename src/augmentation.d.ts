import 'fastify';

declare module 'fastify' {
  export interface FastifyInstance {
    env: Record<string, any>;
  }
}
