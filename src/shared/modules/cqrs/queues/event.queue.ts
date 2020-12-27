import { IEvent } from '../domain/IEvent';
import { BaseQueue } from './abstract.queue';

export class EventQueue extends BaseQueue<IEvent> {}
