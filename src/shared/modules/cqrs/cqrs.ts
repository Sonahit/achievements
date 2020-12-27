import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import { CommandBus } from './buses/command.bus';
import { EventBus } from './buses/event.bus';
import { CqrsService } from './cqrs.service';
import { CommandQueue } from './queues/command.queue';
import { EventQueue } from './queues/event.queue';

declare module 'fastify' {
  export interface FastifyInstance {
    cqrs: {
      eventBus: EventBus;
      commandBus: CommandBus;
      service: CqrsService;
    };
  }
}

const cqrsModule = (fastify: FastifyInstance, _: any, done: (err?: Error) => void): void => {
  fastify.decorate('cqrs', {
    eventBus: new EventBus(new EventQueue()),
    commandBus: new CommandBus(new CommandQueue()),
    service: new CqrsService(fastify),
  });

  fastify.addHook('onSend', (_, __, payload, n) => {
    (async () => {
      fastify.cqrs.service.dispatchCommands();
      fastify.cqrs.service.dispatchEvents();
    })();
    return n(null, payload);
  });

  fastify.log.info('Registered cqrs module');
  done();
};

export default fp(cqrsModule, {
  name: 'cqrs',
  fastify: '>=3.0',
});
