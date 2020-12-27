import { ICommand } from '../domain/ICommand';
import { AbstractBus } from './abstract.bus';

export class CommandBus extends AbstractBus<ICommand> {
  execute(...commands: ICommand[]): void {
    this.storage.queue(...commands);
  }
}
