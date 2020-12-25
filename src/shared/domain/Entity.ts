import { Model } from 'objection';

export abstract class Entity extends Model {
  static get idColumn(): string {
    return 'id';
  }
}
