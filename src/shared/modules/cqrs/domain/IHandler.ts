import { Type } from '@src/shared/types';

export interface IHandler<Entity = any> {
  getSource(): Type<Entity>;

  handle(entity: Entity): any;
}
