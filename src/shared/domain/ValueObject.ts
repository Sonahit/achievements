export class ValueObject<Value, T = Record<string, Value>> {
  constructor(protected props: T) {}

  getProps(): T | Value {
    return this.props;
  }

  setProps(props: T): T {
    this.props = props;
    return this.props;
  }
}
