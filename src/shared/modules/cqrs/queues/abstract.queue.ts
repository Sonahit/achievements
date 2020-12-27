import { IQueue } from '../interfaces/IQueue';

export abstract class BaseQueue<Concrete> implements IQueue<Concrete> {
  data: Concrete[] = [];

  dequeue(): Concrete | undefined {
    return this.data.pop();
  }

  queue(...concretes: Concrete[]): void {
    this.data.push(...concretes);
  }
}
