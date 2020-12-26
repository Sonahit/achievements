import { ValueObject } from './ValueObject';

type KeyObject<U = any> = { [key: string]: U };

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export class State<Value = any, T extends KeyObject<Value> = KeyObject<Value>> extends ValueObject<Value, T> {
  get<U = Value>(name?: keyof T): U;
  get<U = Value | T>(name?: keyof T): U {
    return (name ? this.props[name] : this.props) as any;
  }

  set(name: keyof T, value: any): T;
  set(props: T): T;
  set(v: T | keyof T, value?: any): T {
    if (typeof v === 'string') {
      (this.props as KeyObject)[v] = value;
    } else {
      this.props = v as any;
    }
    return this.props;
  }
}
