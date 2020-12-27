import { ICommand } from './ICommand';
import { IHandler } from './IHandler';

export type ICommandHandler<Command extends ICommand> = IHandler<Command>;
