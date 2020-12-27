import { BaseQueue } from '../queues/abstract.queue';

export abstract class AbstractBus<Concrete> implements Iterable<Concrete> {
  constructor(protected storage: BaseQueue<Concrete>) {}

  get stream(): Iterator<Concrete> {
    return {
      next: () => {
        const value = this.storage.dequeue();
        return value
          ? {
              value,
              done: false,
            }
          : {
              value,
              done: true,
            };
      },
    };
  }

  [Symbol.iterator](): Iterator<Concrete> {
    return this.stream;
  }
}
