import { ValueObject } from './ValueObject';

type KeyObject<U = any> = { [key: string]: U };

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export class State<Value = any, T extends KeyObject<Value> = KeyObject<Value>> extends ValueObject<Value, T> {
  getProps(name?: string): Value;
  getProps(name?: string): T | Value {
    return name ? this.props[name] : this.props;
  }

  setProps(name: string, value: any): T;
  setProps(props: T): T;
  setProps(v: T | string, value?: any): T {
    if (typeof v === 'string') {
      (this.props as KeyObject)[v] = value;
    } else {
      this.props = v;
    }
    return this.props;
  }
}
