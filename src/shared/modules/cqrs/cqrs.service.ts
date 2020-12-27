import { FastifyInstance } from 'fastify';
import { ICommand } from './domain/ICommand';
import { IEvent } from './domain/IEvent';
import { IHandler } from './domain/IHandler';
import { ISaga } from './domain/ISaga';

export class CqrsService {
  constructor(private app: FastifyInstance) {}
  handlers: {
    [eventSource: string]: IHandler[];
  } = {};

  sagas: ISaga[] = [];

  register(...handlers: IHandler[]): void {
    const newHandlers = handlers.reduce((acc, h) => {
      const sourceName = h.getSource().name;
      return acc[sourceName] ? { ...acc, [sourceName]: [...acc[sourceName], h] } : { ...acc, [sourceName]: [h] };
    }, this.handlers);
    this.handlers = newHandlers;
  }

  registerSagas(...sagas: ISaga[]): void {
    this.sagas.push(...sagas);
  }

  private dispatch(...sources: (IEvent | ICommand)[]): void {
    sources.forEach((s) => this.handlers[s.constructor.name]?.forEach((h) => h.handle(s)));
  }

  dispatchCommands(): void {
    this.dispatch(...this.app.cqrs.commandBus);
  }

  dispatchEvents(): void {
    this.dispatch(...this.app.cqrs.eventBus);
  }
}
