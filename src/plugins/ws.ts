import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import ws from 'ws';

declare module 'fastify' {
  export interface FastifyInstance {
    ws: ws.Server;
  }
}

const wsPlugin = (
  fastify: FastifyInstance,
  options: Omit<ws.ServerOptions, 'port' | 'server'>,
  done: (err?: Error) => void,
) => {
  const server = new ws.Server({ ...options, server: fastify.server });
  fastify.decorate('ws', server);
  server.on('connection', (client, req) => {
    const interval = setInterval(() => {
      try {
        client.send(JSON.stringify({ event: 'ping', data: 'ping' }));
      } catch (e) {
        clearInterval(interval);
        client.close();
      }
    }, 5000);
    client.on('message', (data) => {
      fastify.log.debug(`Message from websocket: ${data}`);
    });
  });
  fastify.log.info(`Registered websocket at ws://127.0.0.1:${process.env.PORT}`);
  done();
};

export default fp(wsPlugin, {
  name: 'ws',
});
