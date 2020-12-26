import { Model, ModelClass, PartialModelObject, QueryBuilderType, SingleQueryBuilder } from 'objection';

export abstract class Repository<Entity extends Model> {
  constructor(private entity: ModelClass<Entity>) {}

  query(): QueryBuilderType<Entity> {
    return this.entity.query();
  }

  findOne(conditions: PartialModelObject<Entity>): SingleQueryBuilder<QueryBuilderType<Entity>> {
    return this.query().findOne(conditions);
  }
}
