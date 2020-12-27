export interface IBus<T> {
  publish(...concretes: T[]): void;
}
