import { IEvent } from '../domain/IEvent';
import { BaseQueue } from './abstract.queue';

export class CommandQueue extends BaseQueue<IEvent> {}
