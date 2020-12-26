export class ValueObject<Value, T = Record<string, Value>> {
  constructor(protected props: T) {}

  get(): T | Value {
    return this.props;
  }

  set(props: T): T {
    this.props = props;
    return this.props;
  }
}
