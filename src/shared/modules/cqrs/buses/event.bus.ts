import { IEvent } from '../domain/IEvent';
import { AbstractBus } from './abstract.bus';

export class EventBus extends AbstractBus<IEvent> {
  publish(...concretes: IEvent[]): void {
    this.storage.queue(...concretes);
  }
}
