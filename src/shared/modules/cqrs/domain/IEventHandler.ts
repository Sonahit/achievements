import { IEvent } from './IEvent';
import { IHandler } from './IHandler';

export type IEventHandler<Event extends IEvent> = IHandler<Event>;
