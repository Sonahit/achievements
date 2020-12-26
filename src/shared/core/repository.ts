import { Model, ModelClass, QueryBuilderType } from 'objection';

export abstract class Repository<Entity extends Model> {
  constructor(private entity: ModelClass<Entity>) {}

  query(): QueryBuilderType<Entity> {
    return this.entity.query();
  }
}
