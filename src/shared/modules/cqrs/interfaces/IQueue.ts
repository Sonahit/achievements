export interface IQueue<Concrete = any> {
  queue(...concretes: Concrete[]): void;

  dequeue(): Concrete | undefined;
}
